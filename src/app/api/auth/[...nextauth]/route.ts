import NextAuth, { NextAuthOptions, SessionStrategy } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { ApiError } from "@/utils/apiHandler";
import bcrypt from "bcrypt";
import { prismaClient } from "@/utils/dbConnect";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { type: "email" },
    //     password: { type: "password" },
    //   },
    //   async authorize(credentials) {
    //     if (!credentials?.email || !credentials?.password) {
    //       throw new ApiError(400, "Invalid credentials");
    //     }

    //     try {
    //       const user = await prismaClient.user.findUnique({
    //         where: { email: credentials.email },
    //       });

    //       if (!user) {
    //         throw new ApiError(404, "User not found");
    //       }

    //       /*   const isPasswordValid = await bcrypt.compare(
    //         credentials.password,
    //         user.password!,
    //       );

    //       if (!isPasswordValid) {
    //         throw new ApiError(401, "Invalid credentials");
    //       } */

    //       return {
    //         id: user.id.toString(),
    //         email: user.email,
    //         name: user.name,
    //       };
    //     } catch (error) {
    //       throw new ApiError(500, "Internal server error", error);
    //     }
    //   },
    // }),
  ],
  pages: {
    signIn: "/auth/signin",
    // signOut: '/auth/signout',
    error: "/auth/error",
    // verifyRequest: '/auth/verify-request',
    // newUser: '/auth/new-user'
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const userExists = await prismaClient.user.findUnique({
          where: { email: user.email },
        });
        if (!userExists) {
          await prismaClient.user.create({
            data: {
              email: user.email as string,
              name: user.name as string,
              image: user.image as string,
              accounts: {
                create: {
                  type: "oauth",
                  provider: "google",
                  providerAccountId: user.id,
                },
              },
            },
            include: {
              accounts: true,
            },
          });

          return true;
        }
        return true;
      }

      return true;
    },

    async jwt({ token, account }) {
      if (account) {
        // Google se aane wala expires_at seconds mein hota hai
        token.expires_at = account.expires_at
          ? account.expires_at * 1000
          : Date.now() + 3600 * 1000; // 1 hour fallback
      }
      return token;
    },

    async session(params) {
      const { session, token } = params;

      if (token.expires_at) {
        session.expires = new Date(token.expires_at).toISOString();
      }

      return session;
    },
  },
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: parseInt(process.env.ACCESS_TOKEN_EXP!), // 30 days
  },
  secret: process.env.ACCESS_TOKEN_EXP,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

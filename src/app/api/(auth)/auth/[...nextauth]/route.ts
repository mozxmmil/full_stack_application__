import NextAuth, { NextAuthOptions, SessionStrategy } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { ApiError, ApiResponse } from "@/utils/apiHandler";
import bcrypt from "bcrypt";
import { prismaClient } from "@/utils/dbConnect";
import { generateAccessToken } from "@/utils/accessToken&refreshTokenGen";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { type: "email", name: "email" },
        password: { type: "password", name: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new ApiError(400, "Invalid credentials");
        }

        try {
          const user = await prismaClient.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user) {
            throw new ApiError(404, "User not found");
          }

          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.password!,
          );

          if (!passwordMatch) {
            throw new ApiError(401, "Wrong Password");
          }

          return {
            id: user.id.toString(),
            email: user.email,
            name: user.name ?? undefined,
          };
        } catch (error: any) {
          throw new ApiResponse(500, error.message as string, false, error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    // signOut: '/auth/signout',
    error: "/sigup",
    // verifyRequest: '/auth/verify-request',
    //
    //  newUser: '/auth/new-user'
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
        const { accessToken, refreshToken } = generateAccessToken(
          user.id,
          user.email as string,
        );

        account.access_token = accessToken;
        account.refresh_token = refreshToken;
        return true;
      }
      if (account?.provider === "credentials") {
        const existingUser = await prismaClient.user.findUnique({
          where: { email: user?.email },
        });
        if (!existingUser) {
          throw new ApiError(404, "Please sign up first");
        }

        const { accessToken, refreshToken } = generateAccessToken(
          user.id,
          user.email as string,
        );
        account.access_token = accessToken;
        account.refresh_token = refreshToken;
      }

      return true;
    },

    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.id = account.providerAccountId;
        token.jwt = account.id_token;
      }

      if (account?.provider === "google") {
        const cookie = await cookies();
        cookie.set("access_token", account.access_token as string, {
          path: "/",
          secure: false,
          httpOnly: true,
        });
      }
      if (account?.provider === "credentials") {
        const cookie = await cookies();
        cookie.set("access_token", account.access_token as string, {
          path: "/",
          secure: false,
          httpOnly: true,
        });
      }

      return token;
    },

    async session(params) {
      const { token, session } = params;

      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.user.id = token.id as string;
      session.user.jwt = token.jwt as string;

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

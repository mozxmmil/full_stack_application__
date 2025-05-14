// app/api/graphql/route.ts

import { Resolver } from "@/graphql/resolvers/resolver";
import { schema } from "@/graphql/schema/schema";
import { GetUserFromAccessToken } from "@/utils/accessToken&refreshTokenGen";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: Resolver,
});

// ✅ Correct context function
const context = async (req: NextRequest) => {
  const header = req.headers.get("Authorization")?.replace("Bearer", "").trim();

  let user = null;
  if (header) {
    try {
      user = GetUserFromAccessToken(header);
    } catch (error) {
      console.error("Error getting user from token:", error);
    }
  }

  return { header, user } as TokenType;
};
export const GET = startServerAndCreateNextHandler(server, { context });
export const POST = startServerAndCreateNextHandler(server, { context });

// Optional type for token payload

interface user {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

export interface TokenType {
  header: string;
  user: user | null;
}

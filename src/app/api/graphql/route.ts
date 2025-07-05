// app/api/graphql/route.ts

import { Resolver } from "@/graphql/resolvers/resolver";
import { schema } from "@/graphql/schema/schema";
import { GetUserFromAccessToken } from "@/utils/accessToken&refreshTokenGen";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";

export interface user {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

export interface TokenType {
  header: string;
  user: user | null;
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: Resolver,
});

const context = async (req: NextRequest): Promise<TokenType> => {
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

// ✅ This fixes the build error — by exporting a properly typed handler function
const handler = startServerAndCreateNextHandler(server, { context });

export async function GET(req: NextRequest, contextParams: any) {
  return handler(req, contextParams);
}

export async function POST(req: NextRequest, contextParams: any) {
  return handler(req, contextParams);
}

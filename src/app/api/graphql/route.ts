// app/api/graphql/route.js

import { schema } from "@/graphql/schema/schema";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { Resolver } from "@/graphql/resolvers/resolver";
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: Resolver,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export { handler as GET, handler as POST };

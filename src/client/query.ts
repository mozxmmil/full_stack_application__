"use client";
import { GraphQLClient } from "graphql-request";

// Proper endpoint configuration
const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT + "/api/graphql";
// Verify endpoint exists
if (!endpoint) {
  throw new Error("GRAPHQL_ENDPOINT environment variable is not defined");
}

export const graphqlClient = new GraphQLClient(endpoint);

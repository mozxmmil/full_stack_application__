import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";

export const graphqlClient = new GraphQLClient(
  "http://localhost:3000/api/graphql",
  {
    headers: () => ({
      Authorization: isClient ? `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbWF3bW4xM2cwMDAwdmxsZ3RsN3o5OHl6IiwiZW1haWwiOiJhbmt1c2hAZ21haWwuY29tIiwiaWF0IjoxNzQ3NzUzNDA1LCJleHAiOjE3NDc4MTM0MDV9.-AWR75NssEnS3Shqmnii9c70bX_WbMRRhUqY-WrwwEE` : "",
    }),
  },
);

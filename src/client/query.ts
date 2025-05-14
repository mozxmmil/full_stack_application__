import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";

export const graphqlClient = new GraphQLClient(
  "http://localhost:3000/api/graphql",
  {
    headers: () => ({
      Authorization: isClient
        ? `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjbWFudXI0Z3IwMDAwdmxrY2xvN3hkYnJwIiwiZW1haWwiOiJtZG1vemFtbWlsNjA1QGdtYWlsLmNvbSIsImlhdCI6MTc0NzIyMTgwOSwiZXhwIjoxNzQ3MjgxODA5fQ.7IyyjZGhHIZzDQ0LDDKdRiZV8IIGYbesISzt7ZYozX8`
        : "",
    }),
  },
);

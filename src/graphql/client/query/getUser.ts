import { graphql } from "@/gql";

export const getCurrentUser = graphql(`
  #graphql

  query GetUser {
    getUser {
      image
      name
      id
      email

      follower {
        name
        id
      }

      following {
        name
        id
      }
    }
  }
`);

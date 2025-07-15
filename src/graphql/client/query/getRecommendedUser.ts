import { graphql } from "@/gql";

export const getRecommcomededUser = graphql(`
  #graphql
  query GetRecommcomededUser {
    getRecommcomededUser {
      id
      image
      name
    }
  }
`);

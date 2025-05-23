import { graphql } from "@/gql";

export const getAllTwitts = graphql(`
  #graphql
  query getAllTwitts {
    getTwitts {
      image
      twitt
      id
      updatedAt
      createdAt
      userId {
        name
        image
        id
      }
    }
  }
`);

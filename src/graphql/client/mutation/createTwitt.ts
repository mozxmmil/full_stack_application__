import { graphql } from "@/gql";

export const createTwitt = graphql(`
  #graphql

  mutation CreateTwitt($payload: TwittPayload) {
    createTwitt(payload: $payload) {
      userId {
        name
        image
        id
      }
      twitt
      createdAt
      id
      image
    }
  }
`);

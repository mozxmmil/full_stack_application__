import { graphql } from "@/gql";

export const getPostComments = graphql(`
  #graphql
  query GetComment($postId: String!) {
    getComment(postId: $postId) {
      comment
      createdAt
      id
      user {
        name
        image
        id
      }
    }
  }
`);

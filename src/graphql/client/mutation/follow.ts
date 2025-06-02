import { graphql } from "@/gql";

export const Follow = graphql(`
  #graphql

  mutation FollowUser($userId: String!) {
    followUser(userId: $userId)
  }
`);

export const Unfollow = graphql(`
  #graphql
  mutation UnFollowUser($userId: String!) {
    unFollowUser(userId: $userId)
  }
`);

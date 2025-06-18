import { graphql } from "@/gql";

export const getUserProfileData = graphql(`
  #graphql
  query GetProfileData($getProfileDataId: String!) {
    getProfileData(id: $getProfileDataId) {
      name
      updatedAt
      image
      following {
        id
      }
      follower {
        id
      }
      createdAt
      email
    }
  }
`);

export const getUserProfileDataTwitt = graphql(`
  #graphql

  query GetUserProfileDataTiwtt($getProfileDataTwittId: String!) {
    getProfileDataTwitt(id: $getProfileDataTwittId) {
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

export const getUserProfileDataMedia = graphql(`
  #graphql

  query GetProfileDataMedia($getProfileDataMediaId: String!) {
    getProfileDataMedia(id: $getProfileDataMediaId) {
      id
      video
      image
    }
  }
`);

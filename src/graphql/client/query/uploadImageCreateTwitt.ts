import { graphql } from "@/gql";

export const uploadImageURI = graphql(`
  #graphql

  query UploadImage($iamgeType: String!, $imageName: String!) {
    uploadImage(iamgeType: $iamgeType, imageName: $imageName)
  }
`);

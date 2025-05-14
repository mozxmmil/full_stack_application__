import { graphql } from "@/grl";



export const getCurrentUser = graphql(`
  #graphql

  query GetUser {
    getUser {
      image
      name
      id
      email
    }
  }
`);

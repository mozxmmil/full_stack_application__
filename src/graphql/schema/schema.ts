// src/graphql/schema/schema.ts
export const schema = `#graphql

scalar DateTime
scalar Upload

input TwittPayload {
    data:String!
    image:String
}

type Twitt {
    id:String
    twitt:String!
    image:String
    updatedAt:DateTime
    createdAt:DateTime
    userId:User
    
}

type User {
    id:String
    name:String
    email:String        
    image:String    
    twitt:[Twitt]
    follower:[User]
    following:[User]
  }


  type Query {
    getUser:User
    getTwitts:[Twitt]
    uploadImage(iamgeType:String!,imageName:String!):String
  }


  type Mutation {
    createTwitt(payload:TwittPayload):Twitt
    followUser(userId:String!):Boolean
    unFollowUser(userId:String!):Boolean

  }
  
`;

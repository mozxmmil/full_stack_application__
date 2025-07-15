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
    createdAt:DateTime
    updatedAt:DateTime
  }

type ProfileDataMedia {
    id:String
    image:String
    video:String
    

}

type ImageOrVideo {
    id:String
    image:String
    video:String
    createdAt:DateTime
    user:User
}

type Comment {
    id:String
    comment:String
    createdAt:DateTime
    user:User
}


  type Query {
    getUser:User
    getTwitts:[Twitt]
    uploadImage(iamgeType:String!,imageName:String!):String
    getProfileData(id:String!):User
    getProfileDataTwitt(id:String!):[Twitt]
    getProfileDataMedia(id:String!):[ProfileDataMedia]
    getImageOrVideo(id:String!):ImageOrVideo
    getComment(postId:String!):[Comment]
    getRecommcomededUser:[User]
    
  }


  type Mutation {
    createTwitt(payload:TwittPayload):Twitt
    followUser(userId:String!):Boolean
    unFollowUser(userId:String!):Boolean

  }
  
`;

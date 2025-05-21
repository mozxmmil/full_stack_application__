// src/graphql/schema/schema.ts
export const schema = `#graphql

scalar DateTime

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
    
  }

  type Query {
    getUser:User
    getTwitts:[Twitt]
  }

input TwittPayload {
    data:String!
    image:String
}


  type Mutation {
    createTwitt(payload:TwittPayload):Twitt
  }
  
`;

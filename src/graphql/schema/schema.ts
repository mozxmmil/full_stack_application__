// src/graphql/schema/schema.ts
export const schema = `#graphql

type Twitt {
    id:String
    twitt:String!
    image:String
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
  }

input TwittPayload {
    data:String!
    image:String
}


  type Mutation {
    createTwitt(payload:TwittPayload):Twitt
  }
  
`;

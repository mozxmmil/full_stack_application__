// src/graphql/schema/schema.ts
export const schema = `#graphql


type User {
    id:String
    name:String
    email:String        
    image:String    
    
  }

  type Query {
    getUser:User
  }

  
`;

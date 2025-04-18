// src/graphql/schema/schema.ts
export const schema = `#graphql

  scalar Date

  type Image{
    url:String
    
  }

  type Todo {
    id:Int
    title:String
    description:String
    status:String,
    isCompleted:Boolean
    createdAt:Date
    image:Image
  }
  
  type Query {
    getTodo(id:Int):Todo
  }

  type Mutation {
    createTodo(title:String,description:String):Todo
    
  }
  
`;

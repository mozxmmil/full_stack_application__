import { createTodoHandler, getImagehandler, getTodoHandler } from "../controller/getUser";

export const Resolver = {
  Query: {
    getTodo:getTodoHandler
  },
  Todo:{
    image:getImagehandler
  },
  Mutation:{
    createTodo:createTodoHandler
  }
};

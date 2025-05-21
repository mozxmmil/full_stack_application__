import { getUserHandler } from "../controller/getUser";
import { createTwittHandler, getTwittsHandler } from "../controller/twitt";
import { getUserFromTwitt } from "../objectType/getUserFromTwitt";

export const Resolver = {
  Query: {
    getUser: getUserHandler,
    getTwitts: getTwittsHandler,
  },
  Twitt: {
    userId: getUserFromTwitt,
  },
  Mutation: {
    createTwitt: createTwittHandler,
  },
};

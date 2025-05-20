import { getUserHandler } from "../controller/getUser";
import { createTwittHandler } from "../controller/twitt";
import { getUserFromTwitt } from "../objectType/getUserFromTwitt";

export const Resolver = {
  Query: {
    getUser: getUserHandler,
  },
  Twitt: {
    userId: getUserFromTwitt,
  },
  Mutation: {
    createTwitt: createTwittHandler,
  },
};

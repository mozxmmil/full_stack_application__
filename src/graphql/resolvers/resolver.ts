import { getUserHandler } from "../controller/getUser";
import { createTwittHandler, getTwittsHandler, uploadImageHandler } from "../controller/twitt";
import { getUserFromTwitt } from "../objectType/getUserFromTwitt";
export const Resolver = {
  Query: {
    getUser: getUserHandler,
    getTwitts: getTwittsHandler,
    uploadImage:uploadImageHandler
  },
  Twitt: {
    userId: getUserFromTwitt,
  },

  Mutation: {
    createTwitt: createTwittHandler,
  },
};

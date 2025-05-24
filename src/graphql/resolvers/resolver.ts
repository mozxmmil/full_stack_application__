import {
  folloUserHandler,
  getFollowingInfoHandler,
  hetFollowerInfoHandler,
  unFollowUserHandler,
} from "../controller/follow";
import { getUserHandler } from "../controller/getUser";
import {
  createTwittHandler,
  getTwittsHandler,
  uploadImageHandler,
} from "../controller/twitt";
import { getUserFromTwitt } from "../objectType/getUserFromTwitt";
export const Resolver = {
  Query: {
    getUser: getUserHandler,
    getTwitts: getTwittsHandler,
    uploadImage: uploadImageHandler,
  },
  Twitt: {
    userId: getUserFromTwitt,
  },
  User: {
    follower: hetFollowerInfoHandler,
    following: getFollowingInfoHandler,
  },
  Mutation: {
    createTwitt: createTwittHandler,
    followUser: folloUserHandler,
    unFollowUser: unFollowUserHandler,
  },
};

import {
  folloUserHandler,
  getFollowingInfoHandler,
  hetFollowerInfoHandler,
  unFollowUserHandler,
} from "../controller/follow";
import { getUserHandler } from "../controller/getUser";
import {
    getImageOrVideo,
  getProfileDataHandler,
  getProfileDataMediaHandler,
  getProfileDataTwittHandler,
} from "../controller/profile";
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
    getProfileData: getProfileDataHandler,
    getProfileDataTwitt: getProfileDataTwittHandler,
    getProfileDataMedia:getProfileDataMediaHandler,
    getImageOrVideo:getImageOrVideo
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

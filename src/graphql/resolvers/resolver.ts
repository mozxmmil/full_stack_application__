import { getCommentHandler } from "../controller/comments";
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
import { getRecommendedUserHandler } from "../controller/refcommendedUser";
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
    getImageOrVideo:getImageOrVideo,
    getComment:getCommentHandler,
    getRecommcomededUser:getRecommendedUserHandler
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

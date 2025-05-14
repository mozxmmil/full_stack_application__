import {
  getUserHandler,
} from "../controller/getUser";

export const Resolver = {
  Query: {
    getUser: getUserHandler,
  },
};

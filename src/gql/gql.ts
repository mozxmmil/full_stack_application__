/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  #graphql\n\n  mutation CreateTwitt($payload: TwittPayload) {\n    createTwitt(payload: $payload) {\n      userId {\n        name\n        image\n        id\n      }\n      twitt\n      createdAt\n      id\n      image\n    }\n  }\n": typeof types.CreateTwittDocument,
    "\n  #graphql\n\n  mutation FollowUser($userId: String!) {\n    followUser(userId: $userId)\n  }\n": typeof types.FollowUserDocument,
    "\n  #graphql\n  mutation UnFollowUser($userId: String!) {\n    unFollowUser(userId: $userId)\n  }\n": typeof types.UnFollowUserDocument,
    "\n  #graphql\n  query getAllTwitts {\n    getTwitts {\n      image\n      twitt\n      id\n      updatedAt\n      createdAt\n      userId {\n        name\n        image\n        id\n      }\n    }\n  }\n": typeof types.GetAllTwittsDocument,
    "\n  #graphql\n  query GetProfileData($getProfileDataId: String!) {\n    getProfileData(id: $getProfileDataId) {\n      name\n      updatedAt\n      image\n      following {\n        id\n      }\n      follower {\n        id\n      }\n      createdAt\n      email\n    }\n  }\n": typeof types.GetProfileDataDocument,
    "\n  #graphql\n\n  query GetUserProfileDataTiwtt($getProfileDataTwittId: String!) {\n    getProfileDataTwitt(id: $getProfileDataTwittId) {\n      image\n      twitt\n      id\n      updatedAt\n      createdAt\n      userId {\n        name\n        image\n        id\n      }\n    }\n  }\n": typeof types.GetUserProfileDataTiwttDocument,
    "\n  #graphql\n\n  query GetProfileDataMedia($getProfileDataMediaId: String!) {\n    getProfileDataMedia(id: $getProfileDataMediaId) {\n      id\n      video\n      image\n    }\n  }\n": typeof types.GetProfileDataMediaDocument,
    "\n  #graphql\n\n  query GetUser {\n    getUser {\n      image\n      name\n      id\n      email\n\n      follower {\n        name\n        id\n      }\n\n      following {\n        name\n        id\n      }\n    }\n  }\n": typeof types.GetUserDocument,
    "\n  #graphql\n\n  query UploadImage($iamgeType: String!, $imageName: String!) {\n    uploadImage(iamgeType: $iamgeType, imageName: $imageName)\n  }\n": typeof types.UploadImageDocument,
};
const documents: Documents = {
    "\n  #graphql\n\n  mutation CreateTwitt($payload: TwittPayload) {\n    createTwitt(payload: $payload) {\n      userId {\n        name\n        image\n        id\n      }\n      twitt\n      createdAt\n      id\n      image\n    }\n  }\n": types.CreateTwittDocument,
    "\n  #graphql\n\n  mutation FollowUser($userId: String!) {\n    followUser(userId: $userId)\n  }\n": types.FollowUserDocument,
    "\n  #graphql\n  mutation UnFollowUser($userId: String!) {\n    unFollowUser(userId: $userId)\n  }\n": types.UnFollowUserDocument,
    "\n  #graphql\n  query getAllTwitts {\n    getTwitts {\n      image\n      twitt\n      id\n      updatedAt\n      createdAt\n      userId {\n        name\n        image\n        id\n      }\n    }\n  }\n": types.GetAllTwittsDocument,
    "\n  #graphql\n  query GetProfileData($getProfileDataId: String!) {\n    getProfileData(id: $getProfileDataId) {\n      name\n      updatedAt\n      image\n      following {\n        id\n      }\n      follower {\n        id\n      }\n      createdAt\n      email\n    }\n  }\n": types.GetProfileDataDocument,
    "\n  #graphql\n\n  query GetUserProfileDataTiwtt($getProfileDataTwittId: String!) {\n    getProfileDataTwitt(id: $getProfileDataTwittId) {\n      image\n      twitt\n      id\n      updatedAt\n      createdAt\n      userId {\n        name\n        image\n        id\n      }\n    }\n  }\n": types.GetUserProfileDataTiwttDocument,
    "\n  #graphql\n\n  query GetProfileDataMedia($getProfileDataMediaId: String!) {\n    getProfileDataMedia(id: $getProfileDataMediaId) {\n      id\n      video\n      image\n    }\n  }\n": types.GetProfileDataMediaDocument,
    "\n  #graphql\n\n  query GetUser {\n    getUser {\n      image\n      name\n      id\n      email\n\n      follower {\n        name\n        id\n      }\n\n      following {\n        name\n        id\n      }\n    }\n  }\n": types.GetUserDocument,
    "\n  #graphql\n\n  query UploadImage($iamgeType: String!, $imageName: String!) {\n    uploadImage(iamgeType: $iamgeType, imageName: $imageName)\n  }\n": types.UploadImageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n\n  mutation CreateTwitt($payload: TwittPayload) {\n    createTwitt(payload: $payload) {\n      userId {\n        name\n        image\n        id\n      }\n      twitt\n      createdAt\n      id\n      image\n    }\n  }\n"): (typeof documents)["\n  #graphql\n\n  mutation CreateTwitt($payload: TwittPayload) {\n    createTwitt(payload: $payload) {\n      userId {\n        name\n        image\n        id\n      }\n      twitt\n      createdAt\n      id\n      image\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n\n  mutation FollowUser($userId: String!) {\n    followUser(userId: $userId)\n  }\n"): (typeof documents)["\n  #graphql\n\n  mutation FollowUser($userId: String!) {\n    followUser(userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation UnFollowUser($userId: String!) {\n    unFollowUser(userId: $userId)\n  }\n"): (typeof documents)["\n  #graphql\n  mutation UnFollowUser($userId: String!) {\n    unFollowUser(userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query getAllTwitts {\n    getTwitts {\n      image\n      twitt\n      id\n      updatedAt\n      createdAt\n      userId {\n        name\n        image\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query getAllTwitts {\n    getTwitts {\n      image\n      twitt\n      id\n      updatedAt\n      createdAt\n      userId {\n        name\n        image\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetProfileData($getProfileDataId: String!) {\n    getProfileData(id: $getProfileDataId) {\n      name\n      updatedAt\n      image\n      following {\n        id\n      }\n      follower {\n        id\n      }\n      createdAt\n      email\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetProfileData($getProfileDataId: String!) {\n    getProfileData(id: $getProfileDataId) {\n      name\n      updatedAt\n      image\n      following {\n        id\n      }\n      follower {\n        id\n      }\n      createdAt\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n\n  query GetUserProfileDataTiwtt($getProfileDataTwittId: String!) {\n    getProfileDataTwitt(id: $getProfileDataTwittId) {\n      image\n      twitt\n      id\n      updatedAt\n      createdAt\n      userId {\n        name\n        image\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n\n  query GetUserProfileDataTiwtt($getProfileDataTwittId: String!) {\n    getProfileDataTwitt(id: $getProfileDataTwittId) {\n      image\n      twitt\n      id\n      updatedAt\n      createdAt\n      userId {\n        name\n        image\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n\n  query GetProfileDataMedia($getProfileDataMediaId: String!) {\n    getProfileDataMedia(id: $getProfileDataMediaId) {\n      id\n      video\n      image\n    }\n  }\n"): (typeof documents)["\n  #graphql\n\n  query GetProfileDataMedia($getProfileDataMediaId: String!) {\n    getProfileDataMedia(id: $getProfileDataMediaId) {\n      id\n      video\n      image\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n\n  query GetUser {\n    getUser {\n      image\n      name\n      id\n      email\n\n      follower {\n        name\n        id\n      }\n\n      following {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n\n  query GetUser {\n    getUser {\n      image\n      name\n      id\n      email\n\n      follower {\n        name\n        id\n      }\n\n      following {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n\n  query UploadImage($iamgeType: String!, $imageName: String!) {\n    uploadImage(iamgeType: $iamgeType, imageName: $imageName)\n  }\n"): (typeof documents)["\n  #graphql\n\n  query UploadImage($iamgeType: String!, $imageName: String!) {\n    uploadImage(iamgeType: $iamgeType, imageName: $imageName)\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
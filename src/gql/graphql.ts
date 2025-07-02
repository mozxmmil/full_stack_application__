/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ImageOrVideo = {
  __typename?: 'ImageOrVideo';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  video?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTwitt?: Maybe<Twitt>;
  followUser?: Maybe<Scalars['Boolean']['output']>;
  unFollowUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateTwittArgs = {
  payload?: InputMaybe<TwittPayload>;
};


export type MutationFollowUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationUnFollowUserArgs = {
  userId: Scalars['String']['input'];
};

export type ProfileDataMedia = {
  __typename?: 'ProfileDataMedia';
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getComment?: Maybe<Array<Maybe<Comment>>>;
  getImageOrVideo?: Maybe<ImageOrVideo>;
  getProfileData?: Maybe<User>;
  getProfileDataMedia?: Maybe<Array<Maybe<ProfileDataMedia>>>;
  getProfileDataTwitt?: Maybe<Array<Maybe<Twitt>>>;
  getTwitts?: Maybe<Array<Maybe<Twitt>>>;
  getUser?: Maybe<User>;
  uploadImage?: Maybe<Scalars['String']['output']>;
};


export type QueryGetCommentArgs = {
  postId: Scalars['String']['input'];
};


export type QueryGetImageOrVideoArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProfileDataArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProfileDataMediaArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetProfileDataTwittArgs = {
  id: Scalars['String']['input'];
};


export type QueryUploadImageArgs = {
  iamgeType: Scalars['String']['input'];
  imageName: Scalars['String']['input'];
};

export type Twitt = {
  __typename?: 'Twitt';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  twitt: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<User>;
};

export type TwittPayload = {
  data: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  follower?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  twitt?: Maybe<Array<Maybe<Twitt>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateTwittMutationVariables = Exact<{
  payload?: InputMaybe<TwittPayload>;
}>;


export type CreateTwittMutation = { __typename?: 'Mutation', createTwitt?: { __typename?: 'Twitt', twitt: string, createdAt?: any | null, id?: string | null, image?: string | null, userId?: { __typename?: 'User', name?: string | null, image?: string | null, id?: string | null } | null } | null };

export type FollowUserMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type FollowUserMutation = { __typename?: 'Mutation', followUser?: boolean | null };

export type UnFollowUserMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type UnFollowUserMutation = { __typename?: 'Mutation', unFollowUser?: boolean | null };

export type GetAllTwittsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTwittsQuery = { __typename?: 'Query', getTwitts?: Array<{ __typename?: 'Twitt', image?: string | null, twitt: string, id?: string | null, updatedAt?: any | null, createdAt?: any | null, userId?: { __typename?: 'User', name?: string | null, image?: string | null, id?: string | null } | null } | null> | null };

export type GetCommentQueryVariables = Exact<{
  postId: Scalars['String']['input'];
}>;


export type GetCommentQuery = { __typename?: 'Query', getComment?: Array<{ __typename?: 'Comment', comment?: string | null, createdAt?: any | null, id?: string | null, user?: { __typename?: 'User', name?: string | null, image?: string | null } | null } | null> | null };

export type GetProfileDataQueryVariables = Exact<{
  getProfileDataId: Scalars['String']['input'];
}>;


export type GetProfileDataQuery = { __typename?: 'Query', getProfileData?: { __typename?: 'User', name?: string | null, updatedAt?: any | null, image?: string | null, createdAt?: any | null, email?: string | null, following?: Array<{ __typename?: 'User', id?: string | null } | null> | null, follower?: Array<{ __typename?: 'User', id?: string | null } | null> | null } | null };

export type GetUserProfileDataTiwttQueryVariables = Exact<{
  getProfileDataTwittId: Scalars['String']['input'];
}>;


export type GetUserProfileDataTiwttQuery = { __typename?: 'Query', getProfileDataTwitt?: Array<{ __typename?: 'Twitt', image?: string | null, twitt: string, id?: string | null, updatedAt?: any | null, createdAt?: any | null, userId?: { __typename?: 'User', name?: string | null, image?: string | null, id?: string | null } | null } | null> | null };

export type GetProfileDataMediaQueryVariables = Exact<{
  getProfileDataMediaId: Scalars['String']['input'];
}>;


export type GetProfileDataMediaQuery = { __typename?: 'Query', getProfileDataMedia?: Array<{ __typename?: 'ProfileDataMedia', id?: string | null, video?: string | null, image?: string | null } | null> | null };

export type GetImageOrVideoQueryVariables = Exact<{
  getImageOrVideoId: Scalars['String']['input'];
}>;


export type GetImageOrVideoQuery = { __typename?: 'Query', getImageOrVideo?: { __typename?: 'ImageOrVideo', image?: string | null, id?: string | null, user?: { __typename?: 'User', image?: string | null, name?: string | null, id?: string | null } | null } | null };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', image?: string | null, name?: string | null, id?: string | null, email?: string | null, follower?: Array<{ __typename?: 'User', name?: string | null, id?: string | null } | null> | null, following?: Array<{ __typename?: 'User', name?: string | null, id?: string | null } | null> | null } | null };

export type UploadImageQueryVariables = Exact<{
  iamgeType: Scalars['String']['input'];
  imageName: Scalars['String']['input'];
}>;


export type UploadImageQuery = { __typename?: 'Query', uploadImage?: string | null };


export const CreateTwittDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTwitt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TwittPayload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTwitt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"twitt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<CreateTwittMutation, CreateTwittMutationVariables>;
export const FollowUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FollowUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"followUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<FollowUserMutation, FollowUserMutationVariables>;
export const UnFollowUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnFollowUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unFollowUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<UnFollowUserMutation, UnFollowUserMutationVariables>;
export const GetAllTwittsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllTwitts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTwitts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"twitt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllTwittsQuery, GetAllTwittsQueryVariables>;
export const GetCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<GetCommentQuery, GetCommentQueryVariables>;
export const GetProfileDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProfileData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProfileDataId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfileData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProfileDataId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"follower"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetProfileDataQuery, GetProfileDataQueryVariables>;
export const GetUserProfileDataTiwttDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfileDataTiwtt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProfileDataTwittId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfileDataTwitt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProfileDataTwittId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"twitt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserProfileDataTiwttQuery, GetUserProfileDataTiwttQueryVariables>;
export const GetProfileDataMediaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProfileDataMedia"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProfileDataMediaId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfileDataMedia"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProfileDataMediaId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<GetProfileDataMediaQuery, GetProfileDataMediaQueryVariables>;
export const GetImageOrVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetImageOrVideo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getImageOrVideoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getImageOrVideo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getImageOrVideoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetImageOrVideoQuery, GetImageOrVideoQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"follower"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"following"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const UploadImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UploadImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"iamgeType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"iamgeType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"iamgeType"}}},{"kind":"Argument","name":{"kind":"Name","value":"imageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageName"}}}]}]}}]} as unknown as DocumentNode<UploadImageQuery, UploadImageQueryVariables>;
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  Long: number;
};

export type Activities = BlocksComposition & Content & SeoComposition & {
  __typename?: 'Activities';
  activityChildren?: Maybe<ActivityConnection>;
  activityDescendants?: Maybe<ActivityConnection>;
  ancestors?: Maybe<ContentConnection>;
  ancestorsOrSelf?: Maybe<ContentConnection>;
  children?: Maybe<ContentConnection>;
  /** Composants */
  components: Array<BannerComponentBlockListItemRassurantsComponentBlockListItemTeachersComponentBlockListItemUnion>;
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  descendants?: Maybe<ContentConnection>;
  descendantsOrSelf?: Maybe<ContentConnection>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Content>;
  /** Référencement */
  seo?: Maybe<SeoValues>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** Run a subquery */
  subQuery?: Maybe<Query>;
  /** The identifier of the template to use to render the content item. */
  templateId?: Maybe<Scalars['Int']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
  /** The URL segment of the content item. */
  urlSegment?: Maybe<Scalars['String']>;
};


export type ActivitiesActivityChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ActivityOrderByInput>>>;
  where?: InputMaybe<ActivityFilterInput>;
};


export type ActivitiesActivityDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ActivityOrderByInput>>>;
  where?: InputMaybe<ActivityFilterInput>;
};


export type ActivitiesAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ActivitiesAncestorsOrSelfArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ActivitiesChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ActivitiesDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ActivitiesDescendantsOrSelfArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ActivitiesNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type ActivitiesUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type ActivitiesConnection = {
  __typename?: 'ActivitiesConnection';
  edges: Array<Maybe<ActivitiesEdge>>;
  items: Array<Maybe<Activities>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ActivitiesEdge = {
  __typename?: 'ActivitiesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Activities>;
};

export type ActivitiesFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<ActivitiesFilterInput>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<ActivitiesFilterInput>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<ActivitiesFilterInput>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  createDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  templateId?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  templateId_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  templateId_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  templateId_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  templateId_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  templateId_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  updateDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  urlSegment?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  urlSegment_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  urlSegment_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  urlSegment_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  urlSegment_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ActivitiesOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

export type Activity = BlocksComposition & Content & SeoComposition & {
  __typename?: 'Activity';
  ancestors?: Maybe<ContentConnection>;
  ancestorsOrSelf?: Maybe<ContentConnection>;
  children?: Maybe<ContentConnection>;
  /** Composants */
  components: Array<BannerComponentBlockListItemRassurantsComponentBlockListItemTeachersComponentBlockListItemUnion>;
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  descendants?: Maybe<ContentConnection>;
  descendantsOrSelf?: Maybe<ContentConnection>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Content>;
  /** Référencement */
  seo?: Maybe<SeoValues>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** Run a subquery */
  subQuery?: Maybe<Query>;
  /** The identifier of the template to use to render the content item. */
  templateId?: Maybe<Scalars['Int']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
  /** The URL segment of the content item. */
  urlSegment?: Maybe<Scalars['String']>;
};


export type ActivityAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ActivityAncestorsOrSelfArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ActivityChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ActivityDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ActivityDescendantsOrSelfArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ActivityNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type ActivityUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type ActivityConnection = {
  __typename?: 'ActivityConnection';
  edges: Array<Maybe<ActivityEdge>>;
  items: Array<Maybe<Activity>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ActivityEdge = {
  __typename?: 'ActivityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Activity>;
};

export type ActivityFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<ActivityFilterInput>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<ActivityFilterInput>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<ActivityFilterInput>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  createDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  templateId?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  templateId_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  templateId_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  templateId_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  templateId_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  templateId_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  updateDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  urlSegment?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  urlSegment_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  urlSegment_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  urlSegment_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  urlSegment_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ActivityOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

export type BannerComponent = Element & {
  __typename?: 'BannerComponent';
  /** Image de fond */
  backgroundImage?: Maybe<EditorBannerBackgroundImageMediaPicker>;
  /** Page */
  buttonTarget?: Maybe<Content>;
  /** Texte */
  buttonText?: Maybe<Scalars['String']>;
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** Surtitre */
  surtitle?: Maybe<Scalars['String']>;
  /** Titre */
  title?: Maybe<Scalars['String']>;
};

export type BannerComponentBlockListItem = {
  __typename?: 'BannerComponentBlockListItem';
  Content?: Maybe<BannerComponent>;
};

export type BannerComponentBlockListItemRassurantsComponentBlockListItemTeachersComponentBlockListItemUnion = BannerComponentBlockListItem | RassurantsComponentBlockListItem | TeachersComponentBlockListItem;

export type BlocksComposition = {
  /** Composants */
  components: Array<BannerComponentBlockListItemRassurantsComponentBlockListItemTeachersComponentBlockListItemUnion>;
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The unique identifier. */
  id: Scalars['ID'];
};

export type Content = {
  ancestors?: Maybe<ContentConnection>;
  ancestorsOrSelf?: Maybe<ContentConnection>;
  children?: Maybe<ContentConnection>;
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  descendants?: Maybe<ContentConnection>;
  descendantsOrSelf?: Maybe<ContentConnection>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Content>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** The identifier of the template to use to render the content item. */
  templateId?: Maybe<Scalars['Int']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
  /** The URL segment of the content item. */
  urlSegment?: Maybe<Scalars['String']>;
};


export type ContentAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ContentAncestorsOrSelfArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ContentChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ContentDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ContentDescendantsOrSelfArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ContentNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type ContentUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type ContentConnection = {
  __typename?: 'ContentConnection';
  edges: Array<Maybe<ContentEdge>>;
  items: Array<Maybe<Content>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ContentEdge = {
  __typename?: 'ContentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Content>;
};

export type ContentFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<ContentFilterInput>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<ContentFilterInput>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<ContentFilterInput>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  createDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  templateId?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  templateId_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  templateId_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  templateId_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  templateId_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  templateId_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  updateDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  urlSegment?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  urlSegment_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  urlSegment_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  urlSegment_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  urlSegment_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ContentOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

export type ContentPage = BlocksComposition & Content & SeoComposition & {
  __typename?: 'ContentPage';
  ancestors?: Maybe<ContentConnection>;
  ancestorsOrSelf?: Maybe<ContentConnection>;
  children?: Maybe<ContentConnection>;
  /** Composants */
  components: Array<BannerComponentBlockListItemRassurantsComponentBlockListItemTeachersComponentBlockListItemUnion>;
  contentPageChildren?: Maybe<ContentPageConnection>;
  contentPageDescendants?: Maybe<ContentPageConnection>;
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  descendants?: Maybe<ContentConnection>;
  descendantsOrSelf?: Maybe<ContentConnection>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Content>;
  /** Référencement */
  seo?: Maybe<SeoValues>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** Run a subquery */
  subQuery?: Maybe<Query>;
  /** The identifier of the template to use to render the content item. */
  templateId?: Maybe<Scalars['Int']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
  /** The URL segment of the content item. */
  urlSegment?: Maybe<Scalars['String']>;
};


export type ContentPageAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ContentPageAncestorsOrSelfArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ContentPageChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ContentPageContentPageChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentPageOrderByInput>>>;
  where?: InputMaybe<ContentPageFilterInput>;
};


export type ContentPageContentPageDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentPageOrderByInput>>>;
  where?: InputMaybe<ContentPageFilterInput>;
};


export type ContentPageDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ContentPageDescendantsOrSelfArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type ContentPageNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type ContentPageUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type ContentPageConnection = {
  __typename?: 'ContentPageConnection';
  edges: Array<Maybe<ContentPageEdge>>;
  items: Array<Maybe<ContentPage>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ContentPageEdge = {
  __typename?: 'ContentPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<ContentPage>;
};

export type ContentPageFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<ContentPageFilterInput>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<ContentPageFilterInput>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<ContentPageFilterInput>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  createDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  templateId?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  templateId_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  templateId_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  templateId_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  templateId_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  templateId_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  updateDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  urlSegment?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  urlSegment_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  urlSegment_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  urlSegment_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  urlSegment_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ContentPageOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

export type EditorBannerBackgroundImageMediaPicker = {
  __typename?: 'EditorBannerBackgroundImageMediaPicker';
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  crops?: Maybe<EditorBannerBackgroundImageMediaPickerCrops>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** Size - in bytes */
  umbracoBytes?: Maybe<Scalars['Long']>;
  /** Type */
  umbracoExtension?: Maybe<Scalars['String']>;
  /** Height - in pixels */
  umbracoHeight?: Maybe<Scalars['Long']>;
  /** Width - in pixels */
  umbracoWidth?: Maybe<Scalars['Long']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
};


export type EditorBannerBackgroundImageMediaPickerNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type EditorBannerBackgroundImageMediaPickerUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type EditorBannerBackgroundImageMediaPickerCrops = {
  __typename?: 'EditorBannerBackgroundImageMediaPickerCrops';
  /** Desktop */
  desktop?: Maybe<MediaCrop>;
};

export type EditorTeacherPhotoMediaPicker = {
  __typename?: 'EditorTeacherPhotoMediaPicker';
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  crops?: Maybe<EditorTeacherPhotoMediaPickerCrops>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** Size - in bytes */
  umbracoBytes?: Maybe<Scalars['Long']>;
  /** Type */
  umbracoExtension?: Maybe<Scalars['String']>;
  /** Height - in pixels */
  umbracoHeight?: Maybe<Scalars['Long']>;
  /** Width - in pixels */
  umbracoWidth?: Maybe<Scalars['Long']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
};


export type EditorTeacherPhotoMediaPickerNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type EditorTeacherPhotoMediaPickerUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type EditorTeacherPhotoMediaPickerCrops = {
  __typename?: 'EditorTeacherPhotoMediaPickerCrops';
  /** Desktop */
  desktop?: Maybe<MediaCrop>;
  /** Mobile */
  mobile?: Maybe<MediaCrop>;
};

export type Element = {
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The unique identifier. */
  id: Scalars['ID'];
};

export type File = {
  __typename?: 'File';
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  crop?: Maybe<Scalars['String']>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** Size - in bytes */
  umbracoBytes?: Maybe<Scalars['Long']>;
  /** Type */
  umbracoExtension?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
};


export type FileCropArgs = {
  cropAlias: Scalars['String'];
};


export type FileNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type FileUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  edges: Array<Maybe<FileEdge>>;
  items: Array<Maybe<File>>;
  pageInfo?: Maybe<PageInfo>;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<File>;
};

export type FileFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<FileFilterInput>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<FileFilterInput>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<FileFilterInput>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  createDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  templateId?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  templateId_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  templateId_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  templateId_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  templateId_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  templateId_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  umbracoExtension?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  umbracoExtension_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  umbracoExtension_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  umbracoExtension_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  umbracoExtension_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  updateDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  urlSegment?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  urlSegment_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  urlSegment_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  urlSegment_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  urlSegment_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum FileOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `umbracoExtension` in ascending order. */
  UmbracoExtensionAsc = 'umbracoExtension_ASC',
  /** Order by `umbracoExtension` in descending order. */
  UmbracoExtensionDesc = 'umbracoExtension_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

export type Folder = {
  __typename?: 'Folder';
  FileChildren?: Maybe<FileConnection>;
  FileDescendants?: Maybe<FileConnection>;
  FolderChildren?: Maybe<FolderConnection>;
  FolderDescendants?: Maybe<FolderConnection>;
  ImageChildren?: Maybe<ImageConnection>;
  ImageDescendants?: Maybe<ImageConnection>;
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  crop?: Maybe<Scalars['String']>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  umbracoMediaArticleChildren?: Maybe<UmbracoMediaArticleConnection>;
  umbracoMediaArticleDescendants?: Maybe<UmbracoMediaArticleConnection>;
  umbracoMediaAudioChildren?: Maybe<UmbracoMediaAudioConnection>;
  umbracoMediaAudioDescendants?: Maybe<UmbracoMediaAudioConnection>;
  umbracoMediaVectorGraphicsChildren?: Maybe<UmbracoMediaVectorGraphicsConnection>;
  umbracoMediaVectorGraphicsDescendants?: Maybe<UmbracoMediaVectorGraphicsConnection>;
  umbracoMediaVideoChildren?: Maybe<UmbracoMediaVideoConnection>;
  umbracoMediaVideoDescendants?: Maybe<UmbracoMediaVideoConnection>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
};


export type FolderFileChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderByInput>>>;
  where?: InputMaybe<FileFilterInput>;
};


export type FolderFileDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderByInput>>>;
  where?: InputMaybe<FileFilterInput>;
};


export type FolderFolderChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<FolderOrderByInput>>>;
  where?: InputMaybe<FolderFilterInput>;
};


export type FolderFolderDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<FolderOrderByInput>>>;
  where?: InputMaybe<FolderFilterInput>;
};


export type FolderImageChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ImageOrderByInput>>>;
  where?: InputMaybe<ImageFilterInput>;
};


export type FolderImageDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ImageOrderByInput>>>;
  where?: InputMaybe<ImageFilterInput>;
};


export type FolderCropArgs = {
  cropAlias: Scalars['String'];
};


export type FolderNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type FolderUmbracoMediaArticleChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UmbracoMediaArticleOrderByInput>>>;
  where?: InputMaybe<UmbracoMediaArticleFilterInput>;
};


export type FolderUmbracoMediaArticleDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UmbracoMediaArticleOrderByInput>>>;
  where?: InputMaybe<UmbracoMediaArticleFilterInput>;
};


export type FolderUmbracoMediaAudioChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UmbracoMediaAudioOrderByInput>>>;
  where?: InputMaybe<UmbracoMediaAudioFilterInput>;
};


export type FolderUmbracoMediaAudioDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UmbracoMediaAudioOrderByInput>>>;
  where?: InputMaybe<UmbracoMediaAudioFilterInput>;
};


export type FolderUmbracoMediaVectorGraphicsChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UmbracoMediaVectorGraphicsOrderByInput>>>;
  where?: InputMaybe<UmbracoMediaVectorGraphicsFilterInput>;
};


export type FolderUmbracoMediaVectorGraphicsDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UmbracoMediaVectorGraphicsOrderByInput>>>;
  where?: InputMaybe<UmbracoMediaVectorGraphicsFilterInput>;
};


export type FolderUmbracoMediaVideoChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UmbracoMediaVideoOrderByInput>>>;
  where?: InputMaybe<UmbracoMediaVideoFilterInput>;
};


export type FolderUmbracoMediaVideoDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UmbracoMediaVideoOrderByInput>>>;
  where?: InputMaybe<UmbracoMediaVideoFilterInput>;
};


export type FolderUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type FolderConnection = {
  __typename?: 'FolderConnection';
  edges: Array<Maybe<FolderEdge>>;
  items: Array<Maybe<Folder>>;
  pageInfo?: Maybe<PageInfo>;
};

export type FolderEdge = {
  __typename?: 'FolderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Folder>;
};

export type FolderFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<FolderFilterInput>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<FolderFilterInput>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<FolderFilterInput>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  createDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  templateId?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  templateId_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  templateId_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  templateId_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  templateId_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  templateId_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  updateDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  urlSegment?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  urlSegment_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  urlSegment_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  urlSegment_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  urlSegment_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum FolderOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

export type Home = BlocksComposition & Content & SeoComposition & {
  __typename?: 'Home';
  activitiesChildren?: Maybe<ActivitiesConnection>;
  activitiesDescendants?: Maybe<ActivitiesConnection>;
  activityDescendants?: Maybe<ActivityConnection>;
  ancestors?: Maybe<ContentConnection>;
  ancestorsOrSelf?: Maybe<ContentConnection>;
  children?: Maybe<ContentConnection>;
  /** Composants */
  components: Array<BannerComponentBlockListItemRassurantsComponentBlockListItemTeachersComponentBlockListItemUnion>;
  contentPageChildren?: Maybe<ContentPageConnection>;
  contentPageDescendants?: Maybe<ContentPageConnection>;
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  descendants?: Maybe<ContentConnection>;
  descendantsOrSelf?: Maybe<ContentConnection>;
  /** Liens rapides */
  footerMenu: Array<Maybe<UmbNavItem>>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  newsListChildren?: Maybe<NewsListConnection>;
  newsListDescendants?: Maybe<NewsListConnection>;
  parent?: Maybe<Content>;
  /** Référencement */
  seo?: Maybe<SeoValues>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** Run a subquery */
  subQuery?: Maybe<Query>;
  /** The identifier of the template to use to render the content item. */
  templateId?: Maybe<Scalars['Int']>;
  /** Menu d'entête */
  topMenu: Array<Maybe<UmbNavItem>>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
  /** The URL segment of the content item. */
  urlSegment?: Maybe<Scalars['String']>;
};


export type HomeActivitiesChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ActivitiesOrderByInput>>>;
  where?: InputMaybe<ActivitiesFilterInput>;
};


export type HomeActivitiesDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ActivitiesOrderByInput>>>;
  where?: InputMaybe<ActivitiesFilterInput>;
};


export type HomeActivityDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ActivityOrderByInput>>>;
  where?: InputMaybe<ActivityFilterInput>;
};


export type HomeAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type HomeAncestorsOrSelfArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type HomeChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type HomeContentPageChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentPageOrderByInput>>>;
  where?: InputMaybe<ContentPageFilterInput>;
};


export type HomeContentPageDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentPageOrderByInput>>>;
  where?: InputMaybe<ContentPageFilterInput>;
};


export type HomeDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type HomeDescendantsOrSelfArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type HomeNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type HomeNewsListChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsListOrderByInput>>>;
  where?: InputMaybe<NewsListFilterInput>;
};


export type HomeNewsListDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsListOrderByInput>>>;
  where?: InputMaybe<NewsListFilterInput>;
};


export type HomeUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type HomeConnection = {
  __typename?: 'HomeConnection';
  edges: Array<Maybe<HomeEdge>>;
  items: Array<Maybe<Home>>;
  pageInfo?: Maybe<PageInfo>;
};

export type HomeEdge = {
  __typename?: 'HomeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Home>;
};

export type HomeFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<HomeFilterInput>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<HomeFilterInput>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<HomeFilterInput>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  createDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  templateId?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  templateId_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  templateId_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  templateId_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  templateId_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  templateId_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  updateDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  urlSegment?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  urlSegment_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  urlSegment_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  urlSegment_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  urlSegment_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum HomeOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

export type Image = {
  __typename?: 'Image';
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  crop?: Maybe<Scalars['String']>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** Size - in bytes */
  umbracoBytes?: Maybe<Scalars['Long']>;
  /** Type */
  umbracoExtension?: Maybe<Scalars['String']>;
  /** Height - in pixels */
  umbracoHeight?: Maybe<Scalars['Long']>;
  /** Width - in pixels */
  umbracoWidth?: Maybe<Scalars['Long']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
};


export type ImageCropArgs = {
  cropAlias: Scalars['String'];
};


export type ImageNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type ImageUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type ImageConnection = {
  __typename?: 'ImageConnection';
  edges: Array<Maybe<ImageEdge>>;
  items: Array<Maybe<Image>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ImageEdge = {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Image>;
};

export type ImageFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<ImageFilterInput>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<ImageFilterInput>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<ImageFilterInput>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  createDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  templateId?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  templateId_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  templateId_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  templateId_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  templateId_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  templateId_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  umbracoExtension?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  umbracoExtension_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  umbracoExtension_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  umbracoExtension_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  umbracoExtension_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  updateDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  urlSegment?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  urlSegment_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  urlSegment_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  urlSegment_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  urlSegment_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ImageOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `umbracoExtension` in ascending order. */
  UmbracoExtensionAsc = 'umbracoExtension_ASC',
  /** Order by `umbracoExtension` in descending order. */
  UmbracoExtensionDesc = 'umbracoExtension_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

export type MediaCrop = {
  __typename?: 'MediaCrop';
  height?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type NewsList = BlocksComposition & Content & SeoComposition & {
  __typename?: 'NewsList';
  ancestors?: Maybe<ContentConnection>;
  ancestorsOrSelf?: Maybe<ContentConnection>;
  children?: Maybe<ContentConnection>;
  /** Composants */
  components: Array<BannerComponentBlockListItemRassurantsComponentBlockListItemTeachersComponentBlockListItemUnion>;
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  descendants?: Maybe<ContentConnection>;
  descendantsOrSelf?: Maybe<ContentConnection>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Content>;
  /** Référencement */
  seo?: Maybe<SeoValues>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** Run a subquery */
  subQuery?: Maybe<Query>;
  /** The identifier of the template to use to render the content item. */
  templateId?: Maybe<Scalars['Int']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
  /** The URL segment of the content item. */
  urlSegment?: Maybe<Scalars['String']>;
};


export type NewsListAncestorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type NewsListAncestorsOrSelfArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type NewsListChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type NewsListDescendantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type NewsListDescendantsOrSelfArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type NewsListNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type NewsListUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type NewsListConnection = {
  __typename?: 'NewsListConnection';
  edges: Array<Maybe<NewsListEdge>>;
  items: Array<Maybe<NewsList>>;
  pageInfo?: Maybe<PageInfo>;
};

export type NewsListEdge = {
  __typename?: 'NewsListEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<NewsList>;
};

export type NewsListFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<NewsListFilterInput>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<NewsListFilterInput>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<NewsListFilterInput>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  createDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  templateId?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  templateId_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  templateId_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  templateId_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  templateId_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  templateId_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  updateDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  urlSegment?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  urlSegment_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  urlSegment_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  urlSegment_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  urlSegment_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum NewsListOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** When paginating backwards, are there more items? */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  File?: Maybe<File>;
  Folder?: Maybe<Folder>;
  Image?: Maybe<Image>;
  activities?: Maybe<Activities>;
  activity?: Maybe<Activity>;
  allActivities?: Maybe<ActivitiesConnection>;
  allActivity?: Maybe<ActivityConnection>;
  allContent?: Maybe<ContentConnection>;
  allContentPage?: Maybe<ContentPageConnection>;
  allFile?: Maybe<FileConnection>;
  allFolder?: Maybe<FolderConnection>;
  allHome?: Maybe<HomeConnection>;
  allImage?: Maybe<ImageConnection>;
  allNewsList?: Maybe<NewsListConnection>;
  allUmbracoMediaArticle?: Maybe<UmbracoMediaArticleConnection>;
  allUmbracoMediaAudio?: Maybe<UmbracoMediaAudioConnection>;
  allUmbracoMediaVectorGraphics?: Maybe<UmbracoMediaVectorGraphicsConnection>;
  allUmbracoMediaVideo?: Maybe<UmbracoMediaVideoConnection>;
  content?: Maybe<Content>;
  contentPage?: Maybe<ContentPage>;
  home?: Maybe<Home>;
  newsList?: Maybe<NewsList>;
  search?: Maybe<ContentConnection>;
  umbracoMediaArticle?: Maybe<UmbracoMediaArticle>;
  umbracoMediaAudio?: Maybe<UmbracoMediaAudio>;
  umbracoMediaVectorGraphics?: Maybe<UmbracoMediaVectorGraphics>;
  umbracoMediaVideo?: Maybe<UmbracoMediaVideo>;
};


export type QueryFileArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<FileFilterInput>;
};


export type QueryFolderArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<FolderFilterInput>;
};


export type QueryImageArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<ImageFilterInput>;
};


export type QueryActivitiesArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<ActivitiesFilterInput>;
};


export type QueryActivityArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<ActivityFilterInput>;
};


export type QueryAllActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ActivitiesOrderByInput>>>;
  where?: InputMaybe<ActivitiesFilterInput>;
};


export type QueryAllActivityArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ActivityOrderByInput>>>;
  where?: InputMaybe<ActivityFilterInput>;
};


export type QueryAllContentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  where?: InputMaybe<ContentFilterInput>;
};


export type QueryAllContentPageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentPageOrderByInput>>>;
  where?: InputMaybe<ContentPageFilterInput>;
};


export type QueryAllFileArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<FileOrderByInput>>>;
  where?: InputMaybe<FileFilterInput>;
};


export type QueryAllFolderArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<FolderOrderByInput>>>;
  where?: InputMaybe<FolderFilterInput>;
};


export type QueryAllHomeArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<HomeOrderByInput>>>;
  where?: InputMaybe<HomeFilterInput>;
};


export type QueryAllImageArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ImageOrderByInput>>>;
  where?: InputMaybe<ImageFilterInput>;
};


export type QueryAllNewsListArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsListOrderByInput>>>;
  where?: InputMaybe<NewsListFilterInput>;
};


export type QueryAllUmbracoMediaArticleArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UmbracoMediaArticleOrderByInput>>>;
  where?: InputMaybe<UmbracoMediaArticleFilterInput>;
};


export type QueryAllUmbracoMediaAudioArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UmbracoMediaAudioOrderByInput>>>;
  where?: InputMaybe<UmbracoMediaAudioFilterInput>;
};


export type QueryAllUmbracoMediaVectorGraphicsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UmbracoMediaVectorGraphicsOrderByInput>>>;
  where?: InputMaybe<UmbracoMediaVectorGraphicsFilterInput>;
};


export type QueryAllUmbracoMediaVideoArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<UmbracoMediaVideoOrderByInput>>>;
  where?: InputMaybe<UmbracoMediaVideoFilterInput>;
};


export type QueryContentArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
};


export type QueryContentPageArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<ContentPageFilterInput>;
};


export type QueryHomeArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<HomeFilterInput>;
};


export type QueryNewsListArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<NewsListFilterInput>;
};


export type QuerySearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  culture?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  indexName?: Scalars['String'];
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ContentOrderByInput>>>;
  query: Scalars['String'];
  where?: InputMaybe<ContentFilterInput>;
};


export type QueryUmbracoMediaArticleArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<UmbracoMediaArticleFilterInput>;
};


export type QueryUmbracoMediaAudioArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<UmbracoMediaAudioFilterInput>;
};


export type QueryUmbracoMediaVectorGraphicsArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<UmbracoMediaVectorGraphicsFilterInput>;
};


export type QueryUmbracoMediaVideoArgs = {
  culture?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<UmbracoMediaVideoFilterInput>;
};

export type Rassurant = Element & {
  __typename?: 'Rassurant';
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** Description */
  description?: Maybe<Scalars['String']>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** Titre */
  title?: Maybe<Scalars['String']>;
};

export type RassurantBlockListItem = {
  __typename?: 'RassurantBlockListItem';
  Content?: Maybe<Rassurant>;
};

export type RassurantsComponent = Element & {
  __typename?: 'RassurantsComponent';
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The unique identifier. */
  id: Scalars['ID'];
  /** Liste */
  list: Array<RassurantBlockListItem>;
};

export type RassurantsComponentBlockListItem = {
  __typename?: 'RassurantsComponentBlockListItem';
  Content?: Maybe<RassurantsComponent>;
};

export type SeoComposition = {
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The unique identifier. */
  id: Scalars['ID'];
  /** Référencement */
  seo?: Maybe<SeoValues>;
};

export type SeoValues = {
  __typename?: 'SeoValues';
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Teacher = Element & {
  __typename?: 'Teacher';
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The unique identifier. */
  id: Scalars['ID'];
  /** Photo */
  photo?: Maybe<EditorTeacherPhotoMediaPicker>;
  /** Fonction */
  teacherFunction?: Maybe<Scalars['String']>;
  /** Nom */
  teacherName?: Maybe<Scalars['String']>;
};

export type TeacherBlockListItem = {
  __typename?: 'TeacherBlockListItem';
  Content?: Maybe<Teacher>;
};

export type TeachersComponent = Element & {
  __typename?: 'TeachersComponent';
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The unique identifier. */
  id: Scalars['ID'];
  /** Surtitre */
  surtitle?: Maybe<Scalars['String']>;
  /** Professeurs */
  teachers: Array<TeacherBlockListItem>;
  /** Titre */
  title?: Maybe<Scalars['String']>;
};

export type TeachersComponentBlockListItem = {
  __typename?: 'TeachersComponentBlockListItem';
  Content?: Maybe<TeachersComponent>;
};

export type UmbNavItem = {
  __typename?: 'UmbNavItem';
  /** The page anchor. */
  anchor?: Maybe<Scalars['String']>;
  /** The child items. */
  children: Array<Maybe<UmbNavItem>>;
  /** The target content. */
  content?: Maybe<Content>;
  /** Opens the linked document in a new window or tab */
  target?: Maybe<Scalars['String']>;
  /** The title of the item. */
  title?: Maybe<Scalars['String']>;
  /** The target url. */
  url?: Maybe<Scalars['String']>;
};

export type UmbracoMediaArticle = {
  __typename?: 'UmbracoMediaArticle';
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  crop?: Maybe<Scalars['String']>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** Size - in bytes */
  umbracoBytes?: Maybe<Scalars['Long']>;
  /** Type */
  umbracoExtension?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
};


export type UmbracoMediaArticleCropArgs = {
  cropAlias: Scalars['String'];
};


export type UmbracoMediaArticleNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type UmbracoMediaArticleUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type UmbracoMediaArticleConnection = {
  __typename?: 'UmbracoMediaArticleConnection';
  edges: Array<Maybe<UmbracoMediaArticleEdge>>;
  items: Array<Maybe<UmbracoMediaArticle>>;
  pageInfo?: Maybe<PageInfo>;
};

export type UmbracoMediaArticleEdge = {
  __typename?: 'UmbracoMediaArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UmbracoMediaArticle>;
};

export type UmbracoMediaArticleFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<UmbracoMediaArticleFilterInput>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<UmbracoMediaArticleFilterInput>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<UmbracoMediaArticleFilterInput>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  createDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  templateId?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  templateId_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  templateId_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  templateId_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  templateId_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  templateId_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  umbracoExtension?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  umbracoExtension_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  umbracoExtension_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  umbracoExtension_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  umbracoExtension_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  updateDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  urlSegment?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  urlSegment_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  urlSegment_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  urlSegment_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  urlSegment_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum UmbracoMediaArticleOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `umbracoExtension` in ascending order. */
  UmbracoExtensionAsc = 'umbracoExtension_ASC',
  /** Order by `umbracoExtension` in descending order. */
  UmbracoExtensionDesc = 'umbracoExtension_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

export type UmbracoMediaAudio = {
  __typename?: 'UmbracoMediaAudio';
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  crop?: Maybe<Scalars['String']>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** Size - in bytes */
  umbracoBytes?: Maybe<Scalars['Long']>;
  /** Type */
  umbracoExtension?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
};


export type UmbracoMediaAudioCropArgs = {
  cropAlias: Scalars['String'];
};


export type UmbracoMediaAudioNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type UmbracoMediaAudioUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type UmbracoMediaAudioConnection = {
  __typename?: 'UmbracoMediaAudioConnection';
  edges: Array<Maybe<UmbracoMediaAudioEdge>>;
  items: Array<Maybe<UmbracoMediaAudio>>;
  pageInfo?: Maybe<PageInfo>;
};

export type UmbracoMediaAudioEdge = {
  __typename?: 'UmbracoMediaAudioEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UmbracoMediaAudio>;
};

export type UmbracoMediaAudioFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<UmbracoMediaAudioFilterInput>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<UmbracoMediaAudioFilterInput>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<UmbracoMediaAudioFilterInput>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  createDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  templateId?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  templateId_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  templateId_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  templateId_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  templateId_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  templateId_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  umbracoExtension?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  umbracoExtension_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  umbracoExtension_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  umbracoExtension_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  umbracoExtension_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  updateDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  urlSegment?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  urlSegment_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  urlSegment_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  urlSegment_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  urlSegment_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum UmbracoMediaAudioOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `umbracoExtension` in ascending order. */
  UmbracoExtensionAsc = 'umbracoExtension_ASC',
  /** Order by `umbracoExtension` in descending order. */
  UmbracoExtensionDesc = 'umbracoExtension_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

export type UmbracoMediaVectorGraphics = {
  __typename?: 'UmbracoMediaVectorGraphics';
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  crop?: Maybe<Scalars['String']>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** Size - in bytes */
  umbracoBytes?: Maybe<Scalars['Long']>;
  /** Type */
  umbracoExtension?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
};


export type UmbracoMediaVectorGraphicsCropArgs = {
  cropAlias: Scalars['String'];
};


export type UmbracoMediaVectorGraphicsNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type UmbracoMediaVectorGraphicsUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type UmbracoMediaVectorGraphicsConnection = {
  __typename?: 'UmbracoMediaVectorGraphicsConnection';
  edges: Array<Maybe<UmbracoMediaVectorGraphicsEdge>>;
  items: Array<Maybe<UmbracoMediaVectorGraphics>>;
  pageInfo?: Maybe<PageInfo>;
};

export type UmbracoMediaVectorGraphicsEdge = {
  __typename?: 'UmbracoMediaVectorGraphicsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UmbracoMediaVectorGraphics>;
};

export type UmbracoMediaVectorGraphicsFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<UmbracoMediaVectorGraphicsFilterInput>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<UmbracoMediaVectorGraphicsFilterInput>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<UmbracoMediaVectorGraphicsFilterInput>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  createDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  templateId?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  templateId_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  templateId_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  templateId_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  templateId_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  templateId_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  umbracoExtension?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  umbracoExtension_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  umbracoExtension_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  umbracoExtension_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  umbracoExtension_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  updateDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  urlSegment?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  urlSegment_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  urlSegment_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  urlSegment_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  urlSegment_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum UmbracoMediaVectorGraphicsOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `umbracoExtension` in ascending order. */
  UmbracoExtensionAsc = 'umbracoExtension_ASC',
  /** Order by `umbracoExtension` in descending order. */
  UmbracoExtensionDesc = 'umbracoExtension_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

export type UmbracoMediaVideo = {
  __typename?: 'UmbracoMediaVideo';
  /** The Content Type alias */
  contentTypeAlias: Scalars['String'];
  /** The create date. */
  createDate: Scalars['DateTime'];
  crop?: Maybe<Scalars['String']>;
  /** The unique identifier. */
  id: Scalars['ID'];
  /** The level. */
  level: Scalars['Int'];
  /** The name. */
  name?: Maybe<Scalars['String']>;
  /** The sort order. */
  sortOrder: Scalars['Int'];
  /** Size - in bytes */
  umbracoBytes?: Maybe<Scalars['Long']>;
  /** Type */
  umbracoExtension?: Maybe<Scalars['String']>;
  /** The update date. */
  updateDate?: Maybe<Scalars['DateTime']>;
  /** The URL. */
  url?: Maybe<Scalars['String']>;
};


export type UmbracoMediaVideoCropArgs = {
  cropAlias: Scalars['String'];
};


export type UmbracoMediaVideoNameArgs = {
  culture?: InputMaybe<Scalars['String']>;
};


export type UmbracoMediaVideoUrlArgs = {
  culture?: InputMaybe<Scalars['String']>;
};

export type UmbracoMediaVideoConnection = {
  __typename?: 'UmbracoMediaVideoConnection';
  edges: Array<Maybe<UmbracoMediaVideoEdge>>;
  items: Array<Maybe<UmbracoMediaVideo>>;
  pageInfo?: Maybe<PageInfo>;
};

export type UmbracoMediaVideoEdge = {
  __typename?: 'UmbracoMediaVideoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<UmbracoMediaVideo>;
};

export type UmbracoMediaVideoFilterInput = {
  /** All of the filters must match. */
  AND?: InputMaybe<Array<UmbracoMediaVideoFilterInput>>;
  /** None of the filters must match. */
  NOT?: InputMaybe<Array<UmbracoMediaVideoFilterInput>>;
  /** Some of the filters must match. */
  OR?: InputMaybe<Array<UmbracoMediaVideoFilterInput>>;
  /** Field must equal value. */
  contentTypeAlias?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  contentTypeAlias_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  contentTypeAlias_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  contentTypeAlias_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  contentTypeAlias_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  createDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  createDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  createDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  createDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  createDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  createDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  level?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  level_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  level_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  level_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  level_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  level_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  name?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  name_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  sortOrder?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  sortOrder_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  sortOrder_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  sortOrder_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  sortOrder_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  sortOrder_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  templateId?: InputMaybe<Scalars['Int']>;
  /** Field must match any of the values. */
  templateId_any?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Field must be grater than the value. */
  templateId_gt?: InputMaybe<Scalars['Int']>;
  /** Field must be greater than or equal to the value. */
  templateId_gte?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than the value. */
  templateId_lt?: InputMaybe<Scalars['Int']>;
  /** Field must be lower than or equal to the value. */
  templateId_lte?: InputMaybe<Scalars['Int']>;
  /** Field must equal value. */
  umbracoExtension?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  umbracoExtension_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  umbracoExtension_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  umbracoExtension_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  umbracoExtension_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  updateDate?: InputMaybe<Scalars['DateTime']>;
  /** Field must match any of the values. */
  updateDate_any?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** Field must be grater than the value. */
  updateDate_gt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be greater than or equal to the value. */
  updateDate_gte?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than the value. */
  updateDate_lt?: InputMaybe<Scalars['DateTime']>;
  /** Field must be lower than or equal to the value. */
  updateDate_lte?: InputMaybe<Scalars['DateTime']>;
  /** Field must equal value. */
  url?: InputMaybe<Scalars['String']>;
  /** Field must equal value. */
  urlSegment?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  urlSegment_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  urlSegment_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  urlSegment_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  urlSegment_starts_with?: InputMaybe<Scalars['String']>;
  /** Field must match any of the values. */
  url_any?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Field must constain the value. */
  url_contains?: InputMaybe<Scalars['String']>;
  /** Field must end with the value. */
  url_ends_with?: InputMaybe<Scalars['String']>;
  /** Field must start with the value. */
  url_starts_with?: InputMaybe<Scalars['String']>;
};

export enum UmbracoMediaVideoOrderByInput {
  /** Order by `contentTypeAlias` in ascending order. */
  ContentTypeAliasAsc = 'contentTypeAlias_ASC',
  /** Order by `contentTypeAlias` in descending order. */
  ContentTypeAliasDesc = 'contentTypeAlias_DESC',
  /** Order by `createDate` in ascending order. */
  CreateDateAsc = 'createDate_ASC',
  /** Order by `createDate` in descending order. */
  CreateDateDesc = 'createDate_DESC',
  /** Order by `level` in ascending order. */
  LevelAsc = 'level_ASC',
  /** Order by `level` in descending order. */
  LevelDesc = 'level_DESC',
  /** Order by `name` in ascending order. */
  NameAsc = 'name_ASC',
  /** Order by `name` in descending order. */
  NameDesc = 'name_DESC',
  /** Order by `path` in ascending order. */
  PathAsc = 'path_ASC',
  /** Order by `path` in descending order. */
  PathDesc = 'path_DESC',
  /** Order by `sortOrder` in ascending order. */
  SortOrderAsc = 'sortOrder_ASC',
  /** Order by `sortOrder` in descending order. */
  SortOrderDesc = 'sortOrder_DESC',
  /** Order by `umbracoExtension` in ascending order. */
  UmbracoExtensionAsc = 'umbracoExtension_ASC',
  /** Order by `umbracoExtension` in descending order. */
  UmbracoExtensionDesc = 'umbracoExtension_DESC',
  /** Order by `updateDate` in ascending order. */
  UpdateDateAsc = 'updateDate_ASC',
  /** Order by `updateDate` in descending order. */
  UpdateDateDesc = 'updateDate_DESC'
}

export type GetPageQueryVariables = Exact<{
  url: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetPageQuery = { __typename?: 'Query', page?: { __typename?: 'Activities', seo?: { __typename?: 'SeoValues', title?: string | null, description?: string | null } | null, components: Array<{ __typename: 'BannerComponentBlockListItem', Content?: { __typename?: 'BannerComponent', surtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, backgroundImage?: { __typename?: 'EditorBannerBackgroundImageMediaPicker', crops?: { __typename?: 'EditorBannerBackgroundImageMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', width?: number | null, height?: number | null, url: string } | null } | null } | null, buttonTarget?: { __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null } | null } | { __typename: 'RassurantsComponentBlockListItem', Content?: { __typename?: 'RassurantsComponent', list: Array<{ __typename?: 'RassurantBlockListItem', Content?: { __typename?: 'Rassurant', title?: string | null, description?: string | null } | null }> } | null } | { __typename: 'TeachersComponentBlockListItem', Content?: { __typename?: 'TeachersComponent', surtitle?: string | null, title?: string | null, teachers: Array<{ __typename?: 'TeacherBlockListItem', Content?: { __typename?: 'Teacher', teacherName?: string | null, teacherFunction?: string | null, photo?: { __typename?: 'EditorTeacherPhotoMediaPicker', crops?: { __typename?: 'EditorTeacherPhotoMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null, mobile?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null }> } | { __typename?: 'Activity', seo?: { __typename?: 'SeoValues', title?: string | null, description?: string | null } | null, components: Array<{ __typename: 'BannerComponentBlockListItem', Content?: { __typename?: 'BannerComponent', surtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, backgroundImage?: { __typename?: 'EditorBannerBackgroundImageMediaPicker', crops?: { __typename?: 'EditorBannerBackgroundImageMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', width?: number | null, height?: number | null, url: string } | null } | null } | null, buttonTarget?: { __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null } | null } | { __typename: 'RassurantsComponentBlockListItem', Content?: { __typename?: 'RassurantsComponent', list: Array<{ __typename?: 'RassurantBlockListItem', Content?: { __typename?: 'Rassurant', title?: string | null, description?: string | null } | null }> } | null } | { __typename: 'TeachersComponentBlockListItem', Content?: { __typename?: 'TeachersComponent', surtitle?: string | null, title?: string | null, teachers: Array<{ __typename?: 'TeacherBlockListItem', Content?: { __typename?: 'Teacher', teacherName?: string | null, teacherFunction?: string | null, photo?: { __typename?: 'EditorTeacherPhotoMediaPicker', crops?: { __typename?: 'EditorTeacherPhotoMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null, mobile?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null }> } | { __typename?: 'ContentPage', seo?: { __typename?: 'SeoValues', title?: string | null, description?: string | null } | null, components: Array<{ __typename: 'BannerComponentBlockListItem', Content?: { __typename?: 'BannerComponent', surtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, backgroundImage?: { __typename?: 'EditorBannerBackgroundImageMediaPicker', crops?: { __typename?: 'EditorBannerBackgroundImageMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', width?: number | null, height?: number | null, url: string } | null } | null } | null, buttonTarget?: { __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null } | null } | { __typename: 'RassurantsComponentBlockListItem', Content?: { __typename?: 'RassurantsComponent', list: Array<{ __typename?: 'RassurantBlockListItem', Content?: { __typename?: 'Rassurant', title?: string | null, description?: string | null } | null }> } | null } | { __typename: 'TeachersComponentBlockListItem', Content?: { __typename?: 'TeachersComponent', surtitle?: string | null, title?: string | null, teachers: Array<{ __typename?: 'TeacherBlockListItem', Content?: { __typename?: 'Teacher', teacherName?: string | null, teacherFunction?: string | null, photo?: { __typename?: 'EditorTeacherPhotoMediaPicker', crops?: { __typename?: 'EditorTeacherPhotoMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null, mobile?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null }> } | { __typename?: 'Home', seo?: { __typename?: 'SeoValues', title?: string | null, description?: string | null } | null, components: Array<{ __typename: 'BannerComponentBlockListItem', Content?: { __typename?: 'BannerComponent', surtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, backgroundImage?: { __typename?: 'EditorBannerBackgroundImageMediaPicker', crops?: { __typename?: 'EditorBannerBackgroundImageMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', width?: number | null, height?: number | null, url: string } | null } | null } | null, buttonTarget?: { __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null } | null } | { __typename: 'RassurantsComponentBlockListItem', Content?: { __typename?: 'RassurantsComponent', list: Array<{ __typename?: 'RassurantBlockListItem', Content?: { __typename?: 'Rassurant', title?: string | null, description?: string | null } | null }> } | null } | { __typename: 'TeachersComponentBlockListItem', Content?: { __typename?: 'TeachersComponent', surtitle?: string | null, title?: string | null, teachers: Array<{ __typename?: 'TeacherBlockListItem', Content?: { __typename?: 'Teacher', teacherName?: string | null, teacherFunction?: string | null, photo?: { __typename?: 'EditorTeacherPhotoMediaPicker', crops?: { __typename?: 'EditorTeacherPhotoMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null, mobile?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null }> } | { __typename?: 'NewsList', seo?: { __typename?: 'SeoValues', title?: string | null, description?: string | null } | null, components: Array<{ __typename: 'BannerComponentBlockListItem', Content?: { __typename?: 'BannerComponent', surtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, backgroundImage?: { __typename?: 'EditorBannerBackgroundImageMediaPicker', crops?: { __typename?: 'EditorBannerBackgroundImageMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', width?: number | null, height?: number | null, url: string } | null } | null } | null, buttonTarget?: { __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null } | null } | { __typename: 'RassurantsComponentBlockListItem', Content?: { __typename?: 'RassurantsComponent', list: Array<{ __typename?: 'RassurantBlockListItem', Content?: { __typename?: 'Rassurant', title?: string | null, description?: string | null } | null }> } | null } | { __typename: 'TeachersComponentBlockListItem', Content?: { __typename?: 'TeachersComponent', surtitle?: string | null, title?: string | null, teachers: Array<{ __typename?: 'TeacherBlockListItem', Content?: { __typename?: 'Teacher', teacherName?: string | null, teacherFunction?: string | null, photo?: { __typename?: 'EditorTeacherPhotoMediaPicker', crops?: { __typename?: 'EditorTeacherPhotoMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null, mobile?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null }> } | null, navigation?: { __typename?: 'Home', topMenu: Array<{ __typename?: 'UmbNavItem', title?: string | null, content?: { __typename?: 'Activities', name?: string | null, url?: string | null } | { __typename?: 'Activity', name?: string | null, url?: string | null } | { __typename?: 'ContentPage', name?: string | null, url?: string | null } | { __typename?: 'Home', name?: string | null, url?: string | null } | { __typename?: 'NewsList', name?: string | null, url?: string | null } | null, children: Array<{ __typename?: 'UmbNavItem', title?: string | null, content?: { __typename?: 'Activities', name?: string | null, url?: string | null } | { __typename?: 'Activity', name?: string | null, url?: string | null } | { __typename?: 'ContentPage', name?: string | null, url?: string | null } | { __typename?: 'Home', name?: string | null, url?: string | null } | { __typename?: 'NewsList', name?: string | null, url?: string | null } | null } | null> } | null>, footerMenu: Array<{ __typename?: 'UmbNavItem', title?: string | null, content?: { __typename?: 'Activities', name?: string | null, url?: string | null } | { __typename?: 'Activity', name?: string | null, url?: string | null } | { __typename?: 'ContentPage', name?: string | null, url?: string | null } | { __typename?: 'Home', name?: string | null, url?: string | null } | { __typename?: 'NewsList', name?: string | null, url?: string | null } | null } | null> } | null };

export type GetPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPagesQuery = { __typename?: 'Query', content?: { __typename?: 'Activities', pages?: { __typename?: 'ContentConnection', items: Array<{ __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null> } | null } | { __typename?: 'Activity', pages?: { __typename?: 'ContentConnection', items: Array<{ __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null> } | null } | { __typename?: 'ContentPage', pages?: { __typename?: 'ContentConnection', items: Array<{ __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null> } | null } | { __typename?: 'Home', pages?: { __typename?: 'ContentConnection', items: Array<{ __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null> } | null } | { __typename?: 'NewsList', pages?: { __typename?: 'ContentConnection', items: Array<{ __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null> } | null } | null };

export type BannerComponentFragment = { __typename: 'BannerComponentBlockListItem', Content?: { __typename?: 'BannerComponent', surtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, backgroundImage?: { __typename?: 'EditorBannerBackgroundImageMediaPicker', crops?: { __typename?: 'EditorBannerBackgroundImageMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', width?: number | null, height?: number | null, url: string } | null } | null } | null, buttonTarget?: { __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null } | null };

export type RassurantsComponentFragment = { __typename: 'RassurantsComponentBlockListItem', Content?: { __typename?: 'RassurantsComponent', list: Array<{ __typename?: 'RassurantBlockListItem', Content?: { __typename?: 'Rassurant', title?: string | null, description?: string | null } | null }> } | null };

export type TeachersComponentFragment = { __typename: 'TeachersComponentBlockListItem', Content?: { __typename?: 'TeachersComponent', surtitle?: string | null, title?: string | null, teachers: Array<{ __typename?: 'TeacherBlockListItem', Content?: { __typename?: 'Teacher', teacherName?: string | null, teacherFunction?: string | null, photo?: { __typename?: 'EditorTeacherPhotoMediaPicker', crops?: { __typename?: 'EditorTeacherPhotoMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null, mobile?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null };

type BlocksComposition_Activities_Fragment = { __typename?: 'Activities', components: Array<{ __typename: 'BannerComponentBlockListItem', Content?: { __typename?: 'BannerComponent', surtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, backgroundImage?: { __typename?: 'EditorBannerBackgroundImageMediaPicker', crops?: { __typename?: 'EditorBannerBackgroundImageMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', width?: number | null, height?: number | null, url: string } | null } | null } | null, buttonTarget?: { __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null } | null } | { __typename: 'RassurantsComponentBlockListItem', Content?: { __typename?: 'RassurantsComponent', list: Array<{ __typename?: 'RassurantBlockListItem', Content?: { __typename?: 'Rassurant', title?: string | null, description?: string | null } | null }> } | null } | { __typename: 'TeachersComponentBlockListItem', Content?: { __typename?: 'TeachersComponent', surtitle?: string | null, title?: string | null, teachers: Array<{ __typename?: 'TeacherBlockListItem', Content?: { __typename?: 'Teacher', teacherName?: string | null, teacherFunction?: string | null, photo?: { __typename?: 'EditorTeacherPhotoMediaPicker', crops?: { __typename?: 'EditorTeacherPhotoMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null, mobile?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null }> };

type BlocksComposition_Activity_Fragment = { __typename?: 'Activity', components: Array<{ __typename: 'BannerComponentBlockListItem', Content?: { __typename?: 'BannerComponent', surtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, backgroundImage?: { __typename?: 'EditorBannerBackgroundImageMediaPicker', crops?: { __typename?: 'EditorBannerBackgroundImageMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', width?: number | null, height?: number | null, url: string } | null } | null } | null, buttonTarget?: { __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null } | null } | { __typename: 'RassurantsComponentBlockListItem', Content?: { __typename?: 'RassurantsComponent', list: Array<{ __typename?: 'RassurantBlockListItem', Content?: { __typename?: 'Rassurant', title?: string | null, description?: string | null } | null }> } | null } | { __typename: 'TeachersComponentBlockListItem', Content?: { __typename?: 'TeachersComponent', surtitle?: string | null, title?: string | null, teachers: Array<{ __typename?: 'TeacherBlockListItem', Content?: { __typename?: 'Teacher', teacherName?: string | null, teacherFunction?: string | null, photo?: { __typename?: 'EditorTeacherPhotoMediaPicker', crops?: { __typename?: 'EditorTeacherPhotoMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null, mobile?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null }> };

type BlocksComposition_ContentPage_Fragment = { __typename?: 'ContentPage', components: Array<{ __typename: 'BannerComponentBlockListItem', Content?: { __typename?: 'BannerComponent', surtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, backgroundImage?: { __typename?: 'EditorBannerBackgroundImageMediaPicker', crops?: { __typename?: 'EditorBannerBackgroundImageMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', width?: number | null, height?: number | null, url: string } | null } | null } | null, buttonTarget?: { __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null } | null } | { __typename: 'RassurantsComponentBlockListItem', Content?: { __typename?: 'RassurantsComponent', list: Array<{ __typename?: 'RassurantBlockListItem', Content?: { __typename?: 'Rassurant', title?: string | null, description?: string | null } | null }> } | null } | { __typename: 'TeachersComponentBlockListItem', Content?: { __typename?: 'TeachersComponent', surtitle?: string | null, title?: string | null, teachers: Array<{ __typename?: 'TeacherBlockListItem', Content?: { __typename?: 'Teacher', teacherName?: string | null, teacherFunction?: string | null, photo?: { __typename?: 'EditorTeacherPhotoMediaPicker', crops?: { __typename?: 'EditorTeacherPhotoMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null, mobile?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null }> };

type BlocksComposition_Home_Fragment = { __typename?: 'Home', components: Array<{ __typename: 'BannerComponentBlockListItem', Content?: { __typename?: 'BannerComponent', surtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, backgroundImage?: { __typename?: 'EditorBannerBackgroundImageMediaPicker', crops?: { __typename?: 'EditorBannerBackgroundImageMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', width?: number | null, height?: number | null, url: string } | null } | null } | null, buttonTarget?: { __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null } | null } | { __typename: 'RassurantsComponentBlockListItem', Content?: { __typename?: 'RassurantsComponent', list: Array<{ __typename?: 'RassurantBlockListItem', Content?: { __typename?: 'Rassurant', title?: string | null, description?: string | null } | null }> } | null } | { __typename: 'TeachersComponentBlockListItem', Content?: { __typename?: 'TeachersComponent', surtitle?: string | null, title?: string | null, teachers: Array<{ __typename?: 'TeacherBlockListItem', Content?: { __typename?: 'Teacher', teacherName?: string | null, teacherFunction?: string | null, photo?: { __typename?: 'EditorTeacherPhotoMediaPicker', crops?: { __typename?: 'EditorTeacherPhotoMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null, mobile?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null }> };

type BlocksComposition_NewsList_Fragment = { __typename?: 'NewsList', components: Array<{ __typename: 'BannerComponentBlockListItem', Content?: { __typename?: 'BannerComponent', surtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, backgroundImage?: { __typename?: 'EditorBannerBackgroundImageMediaPicker', crops?: { __typename?: 'EditorBannerBackgroundImageMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', width?: number | null, height?: number | null, url: string } | null } | null } | null, buttonTarget?: { __typename?: 'Activities', url?: string | null } | { __typename?: 'Activity', url?: string | null } | { __typename?: 'ContentPage', url?: string | null } | { __typename?: 'Home', url?: string | null } | { __typename?: 'NewsList', url?: string | null } | null } | null } | { __typename: 'RassurantsComponentBlockListItem', Content?: { __typename?: 'RassurantsComponent', list: Array<{ __typename?: 'RassurantBlockListItem', Content?: { __typename?: 'Rassurant', title?: string | null, description?: string | null } | null }> } | null } | { __typename: 'TeachersComponentBlockListItem', Content?: { __typename?: 'TeachersComponent', surtitle?: string | null, title?: string | null, teachers: Array<{ __typename?: 'TeacherBlockListItem', Content?: { __typename?: 'Teacher', teacherName?: string | null, teacherFunction?: string | null, photo?: { __typename?: 'EditorTeacherPhotoMediaPicker', crops?: { __typename?: 'EditorTeacherPhotoMediaPickerCrops', desktop?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null, mobile?: { __typename?: 'MediaCrop', url: string, width?: number | null, height?: number | null } | null } | null } | null } | null }> } | null }> };

export type BlocksCompositionFragment = BlocksComposition_Activities_Fragment | BlocksComposition_Activity_Fragment | BlocksComposition_ContentPage_Fragment | BlocksComposition_Home_Fragment | BlocksComposition_NewsList_Fragment;

type SeoComposition_Activities_Fragment = { __typename?: 'Activities', seo?: { __typename?: 'SeoValues', title?: string | null, description?: string | null } | null };

type SeoComposition_Activity_Fragment = { __typename?: 'Activity', seo?: { __typename?: 'SeoValues', title?: string | null, description?: string | null } | null };

type SeoComposition_ContentPage_Fragment = { __typename?: 'ContentPage', seo?: { __typename?: 'SeoValues', title?: string | null, description?: string | null } | null };

type SeoComposition_Home_Fragment = { __typename?: 'Home', seo?: { __typename?: 'SeoValues', title?: string | null, description?: string | null } | null };

type SeoComposition_NewsList_Fragment = { __typename?: 'NewsList', seo?: { __typename?: 'SeoValues', title?: string | null, description?: string | null } | null };

export type SeoCompositionFragment = SeoComposition_Activities_Fragment | SeoComposition_Activity_Fragment | SeoComposition_ContentPage_Fragment | SeoComposition_Home_Fragment | SeoComposition_NewsList_Fragment;

export type NavigationPartFragment = { __typename?: 'Query', navigation?: { __typename?: 'Home', topMenu: Array<{ __typename?: 'UmbNavItem', title?: string | null, content?: { __typename?: 'Activities', name?: string | null, url?: string | null } | { __typename?: 'Activity', name?: string | null, url?: string | null } | { __typename?: 'ContentPage', name?: string | null, url?: string | null } | { __typename?: 'Home', name?: string | null, url?: string | null } | { __typename?: 'NewsList', name?: string | null, url?: string | null } | null, children: Array<{ __typename?: 'UmbNavItem', title?: string | null, content?: { __typename?: 'Activities', name?: string | null, url?: string | null } | { __typename?: 'Activity', name?: string | null, url?: string | null } | { __typename?: 'ContentPage', name?: string | null, url?: string | null } | { __typename?: 'Home', name?: string | null, url?: string | null } | { __typename?: 'NewsList', name?: string | null, url?: string | null } | null } | null> } | null>, footerMenu: Array<{ __typename?: 'UmbNavItem', title?: string | null, content?: { __typename?: 'Activities', name?: string | null, url?: string | null } | { __typename?: 'Activity', name?: string | null, url?: string | null } | { __typename?: 'ContentPage', name?: string | null, url?: string | null } | { __typename?: 'Home', name?: string | null, url?: string | null } | { __typename?: 'NewsList', name?: string | null, url?: string | null } | null } | null> } | null };

export const BannerComponentFragmentDoc = gql`
    fragment BannerComponent on BannerComponentBlockListItem {
  __typename
  Content {
    surtitle
    title
    description
    backgroundImage {
      crops {
        desktop {
          width
          height
          url
        }
      }
    }
    buttonText
    buttonTarget {
      url
    }
  }
}
    `;
export const RassurantsComponentFragmentDoc = gql`
    fragment RassurantsComponent on RassurantsComponentBlockListItem {
  __typename
  Content {
    list {
      Content {
        title
        description
      }
    }
  }
}
    `;
export const TeachersComponentFragmentDoc = gql`
    fragment TeachersComponent on TeachersComponentBlockListItem {
  __typename
  Content {
    surtitle
    title
    teachers {
      Content {
        teacherName
        teacherFunction
        photo {
          crops {
            desktop {
              url
              width
              height
            }
            mobile {
              url
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;
export const BlocksCompositionFragmentDoc = gql`
    fragment BlocksComposition on BlocksComposition {
  components {
    ...BannerComponent
    ...RassurantsComponent
    ...TeachersComponent
  }
}
    ${BannerComponentFragmentDoc}
${RassurantsComponentFragmentDoc}
${TeachersComponentFragmentDoc}`;
export const SeoCompositionFragmentDoc = gql`
    fragment SeoComposition on SeoComposition {
  seo {
    title
    description
  }
}
    `;
export const NavigationPartFragmentDoc = gql`
    fragment NavigationPart on Query {
  navigation: home {
    topMenu {
      title
      content {
        name
        url
      }
      children {
        title
        content {
          name
          url
        }
      }
    }
    footerMenu {
      title
      content {
        name
        url
      }
    }
  }
}
    `;
export const GetPageDocument = gql`
    query getPage($url: String!, $preview: Boolean = false) {
  page: content(url: $url, preview: $preview) {
    ...SeoComposition
    ...BlocksComposition
  }
  ...NavigationPart
}
    ${SeoCompositionFragmentDoc}
${BlocksCompositionFragmentDoc}
${NavigationPartFragmentDoc}`;
export const GetPagesDocument = gql`
    query getPages {
  content(url: "/") {
    pages: descendantsOrSelf(where: {templateId_gt: 0}) {
      items {
        url
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getPage(variables: GetPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageQuery>(GetPageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPage', 'query');
    },
    getPages(variables?: GetPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPagesQuery>(GetPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPages', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
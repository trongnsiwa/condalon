// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBlogPostFields {
  /** slug */
  slug?: string | undefined;

  /** title */
  title: string;

  /** description */
  description: string;

  /** coverImage */
  coverImage: Asset;

  /** body */
  body: Document;

  /** publishedDate */
  publishedDate?: string | undefined;

  /** comments */
  comments?: Record<string, any> | undefined;
}

export interface IBlogPost extends Entry<IBlogPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogPost";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IHomeContentFields {
  /** name */
  name: string;

  /** title */
  title: string;

  /** description */
  description?: string | undefined;
}

export interface IHomeContent extends Entry<IHomeContentFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "homeContent";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IIntroduceContentFields {
  /** name */
  name: string;

  /** title */
  title: string;

  /** description */
  description?: string | undefined;
}

export interface IIntroduceContent extends Entry<IIntroduceContentFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "introduceContent";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "blogPost" | "homeContent" | "introduceContent";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";

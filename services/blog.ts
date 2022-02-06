import {ContentfulClientApi, createClient, Entry} from 'contentful';
import { IBlogPostFields } from 'contentful/__generated__/types';

export class BlogApi {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
      environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ""
    });
  }


  async fetchBlogEntries(): Promise<Entry<IBlogPostFields>[]>{
    let data = await this.client
      .getEntries<IBlogPostFields>({
        content_type: "blogPost" // only fetch blog post entry
      });
    return data.items;
  }

  async searchBlog(filter): Promise<Entry<IBlogPostFields>[]> {
    let data = await this.client.getEntries<IBlogPostFields>($.extend(
      {content_type: "blogPost"}, filter));
    return data.items;
  }
}

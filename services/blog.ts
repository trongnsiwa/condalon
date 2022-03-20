import {ContentfulClientApi, createClient, Entry} from 'contentful';
import { IBlogPostFields, IComment, ICommentFields } from 'contentful/__generated__/types';
const contentful = require('contentful-management')
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
    let data = await this.client.getEntries<IBlogPostFields>(filter);
    return data.items;
  }

  async getBlogComments(blog_id): Promise<IComment[]>{
    let data = await this.client.getEntries<IBlogPostFields>({
      content_type: 'blogPost',
      "sys.id": blog_id
    });
    return data.items[0].fields.comments;
  }

  async createComment(commentatorName, content, parent): Promise<IComment>{
    const updateClient = contentful.createClient({
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN 
    });
    const space = await updateClient.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT);
    var newCommentParent;
    if(parent == undefined) {
      newCommentParent = parent;
    } else {
      if(parent.fields.parent){
        newCommentParent = {
          sys: {
            id: parent.fields.parent?.sys.id,
            linkType: "Entry",
            type:"Link"
        }};
      } else {
        newCommentParent = {
          sys: {
            id: parent.sys.id,
            linkType: "Entry",
            type:"Link"
        }};
      }
      
    };
    const entry = await environment.createEntry('comment', {
      fields: {
        commentatorName: {
          'en-US': commentatorName
        }, 
        content: {
          'en-US': content
        }, 
        parent:  {
          'en-US': newCommentParent
        }, 
      }
    });
    entry.publish();
    return entry;
  }

  async handleBlogComment(comment, id) {
    const updateClient = contentful.createClient({
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN 
    });
    const space = await updateClient.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT);
    const entry = await environment.getEntry(id);
    if(entry.fields.comments == undefined) {
      entry.fields.comments = {
        "en-US": []
      }
      entry.update()
    }
    var newComment = {
      sys: {
        id: comment.sys.id,
        linkType: "Entry",
        type:"Link"
      }};
    entry.fields.comments['en-US'].push(newComment);
    const newVersionEntry = await entry.update();
    await newVersionEntry.publish();
  }

  async createBlog(authorName, title, bodyContent) {
    var slug = title.replaceAll(" ","-");
    console.log(slug);
    var body = bodyContent + " Tác giả: " + authorName;
    console.log(body);
    const updateClient = contentful.createClient({
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN 
    });
    const space = await updateClient.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT);
    const entry = await environment.createEntry('waitingBlog', {
      fields: {
        slug: {
          'en-US': slug
        }, 
        title: {
          'en-US': title
        }, 
        body:  {
          'en-US': body
        }, 
      }
    });
    entry.publish();
    return entry;
  }
}

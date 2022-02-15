import Card from "@components/Card";
import React from 'react';
import { BlogApi } from 'services/blog';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import CommentSection from "@components/CommentSection";
import ImageBlock from "@components/ImageBlock";
import { BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const api = new BlogApi();

export async function getStaticPaths() {
    let data = await api.fetchBlogEntries();
    return {
        paths: data.map(item => ({
            params: { slug: item.fields.slug },
        })),
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    let blogContent = await api.searchBlog({
         content_type: "blogPost",
        "fields.slug": params.slug,
    });
    let recommendBlog = await api.searchBlog({
        content_type: "blogPost",
        "fields.slug[ne]": params.slug,
        order: 'sys.createdAt',
        limit: 3,
    });
    return {
        props: {
            blogContent: blogContent[0],
            recommendBlog: recommendBlog
        }
    }
}
  
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      return <ImageBlock title={title} description={description} img = {file.url} />
    }, 
  }
  };
const BlogDetail = ({ blogContent, recommendBlog }) => {
    const createdAt = new Date(blogContent?.sys.createdAt);
    return (
        <>
          <div className="blogDetail">
              <div className="blogDetail-bgImg" style={{
                height: '50vh',
                width: '100%',
                backgroundImage: "url(" + blogContent?.fields.coverImage.fields.file.url + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}
              >
              </div>
              <div className="blogDetail-blogContent">
                  <div className="blogDetail-blogContent_title">
                    <h1>{blogContent?.fields.title}</h1>
                  </div>
                  <div className="blogDetail-blogContent_publishDate">
                      Ngày {createdAt.getDate()} tháng {createdAt.getMonth() + 1} năm {createdAt.getFullYear()}
                  </div>
                  <div className="blogDetail-blogContent_content">
                    {documentToReactComponents(blogContent?.fields.body, options)}
                  </div>
              </div>
              <div className="blogDetail-share">
                <div className="blogDetail-share_text">
                  Bạn hãy chia sẻ bài viết của tụi mình đến những người khác nhé!!!
                </div>
                <div className="blogDetail-share_socials">
                  <a href="https://www.facebook.com/bomeoicondalon">
                    <BsFacebook className="socials-icon facebook" size={45} />
                  </a>
                  <a href="mailto:lodungsao@gmail.com">
                    <HiMail className="socials-icon" size={45} />
                  </a>
                </div>
              </div>
              <div className="blogDetail-line"></div>
              <div className="blogDetail-recommendBlog">
                  <h1>
                    Có thể bạn quan tâm
                  </h1>
                  <div className="blogDetail-recommendBlog_blogCard">
                    {recommendBlog?.map((item) => {
                        return (
                          <Card
                              title= {item.fields.title}
                              description= {item.fields.description}
                              image= {item.fields.coverImage.fields.file.url}
                              key = {item.sys.id}
                          />
                        );
                    })}
                  </div>
              </div>
              <div className="blogDetail-commentSection">
                <CommentSection blog_id={blogContent.sys.id}/>
              </div>
          </div>
          
        </>
      );
}

export default BlogDetail;
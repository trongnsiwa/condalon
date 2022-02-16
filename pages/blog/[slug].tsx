import Card from "@components/Card";
import React from 'react';
import { BlogApi } from 'services/blog';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
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
const Bold = ({ children }) => <span style={{fontWeight: "bold"}}>{children}</span>; 
const Paragragh = ({ children }) => <p>{children}</p>;
const H1 = ({children}) => <div style={{textAlign: "center"}}><h1>{children}</h1></div> 
const H2 = ({children}) => <div style={{textAlign: "center"}}><h2>{children}</h2></div>
const H3 = ({children}) => <div style={{textAlign: "center"}}><h3>{children}</h3></div>
const H4 = ({children}) => <div style={{textAlign: "center"}}><h4>{children}</h4></div>
const H5 = ({children}) => <div style={{textAlign: "center"}}><h5>{children}</h5></div>
const H6 = ({children}) => <div style={{textAlign: "center"}}><h6>{children}</h6></div>
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      return <ImageBlock title={title} description={description} img = {file.url} />
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <Paragragh>{children}</Paragragh>
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <H1>{children}</H1>
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <H2>{children}</H2>
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <H3>{children}</H3>
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <H4>{children}</H4>
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <H5>{children}</H5>
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <H6>{children}</H6>
    }
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
                              slug={item.fields.slug}
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
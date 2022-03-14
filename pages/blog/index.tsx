import BlogItem from "@components/Blog";
import { createClient, Entry } from "contentful";
import { IBlogPostFields } from "contentful/__generated__/types";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner, ToastHeader } from "react-bootstrap";
import Layout from "@components/layouts/Layout";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ""
});

const Blog = () => {
  const [blogContent, setBlogContent] = useState<Entry<IBlogPostFields>[]>();
  const [tempBlogContent, setTempBlogContent] = useState<Entry<IBlogPostFields>[]>();
  const [loadMore, setLoadMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [index, setIndex] = useState(2);
  const [countBlog, setCountBlog] = useState(0);
  const [countTempBlog, setTempCountBlog] = useState(3);

  const getBlogContent = async () => {
    const { items } = await client.getEntries<IBlogPostFields>({
      content_type: "blogPost"
    });
    setBlogContent(items.slice(0, index));
    setIndex(index + 2);
    getBlogContentFul();
  };

  const getBlogContentNext = async () => {
    const { items } = await client.getEntries<IBlogPostFields>({
      content_type: "blogPost"
    });
    setBlogContent(items.slice(0, index));
    setIndex(index + 2);
  };

  const getBlogContentFul = async () => {
    const { items } = await client.getEntries<IBlogPostFields>({
      content_type: "blogPost"
    });
    setTempBlogContent(items);
  };

  const getFields = (slug: string) => {
    return blogContent?.find((h) => h.fields.slug === slug).fields;
  };

  useEffect(() => {
    getBlogContent();
  }, []);

  const fecthDataBlog = () => {
    if (hasMore) {
      getBlogContentNext();
      blogContent.map((item) => {
        setCountBlog(item.fields.slug.length);
      });
      tempBlogContent.map((item) => {
        setTempCountBlog(item.fields.slug.length);
      });
    }
  };

  const loading = () => {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  };

  useEffect(() => {
    if (blogContent != null) {
      const isMore = countBlog < countTempBlog;
      setHasMore(isMore);
    }
  }, [blogContent]);

  return (
    <Layout title="Blog">
      <div className="blog">
        {/* hero */}
        <div className="blog-hero">
          <div className="blog-hero_content">
            <Fade direction="down" triggerOnce>
              <h1>Bài Viết Mới Nhất</h1>
              <p>“It is better to be young in your failures than old in your successes”</p>
            </Fade>
          </div>
        </div>
        {blogContent ? (
          blogContent.length > 0 ? (
            blogContent.map((item, i) => {
              return (
                <Slide key={item.fields.slug} triggerOnce>
                  <InfiniteScroll
                    dataLength={item.fields.slug.length}
                    next={fecthDataBlog}
                    hasMore={hasMore}
                    loader={loading}
                  >
                    <ul>
                      <li>
                        <Link href={"/blog/" + item.fields.slug} passHref>
                          <a>
                            <BlogItem
                              image={getFields(item.fields.slug)?.coverImage.fields.file.url}
                              title={getFields(item.fields.slug)?.title}
                              publicDate={getFields(item.fields.slug)?.title}
                              owner="Hoang Phuc"
                              description={getFields(item.fields.slug)?.description}
                              key={item.sys.id}
                            />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </InfiniteScroll>
                </Slide>
              );
            })
          ) : (
            <h2 className="text-center m-5">Không có kết quả</h2>
          )
        ) : null}
      </div>
      {/* <nav ref={loadRef} className="blog-loadContainer">
        {hasMore ? (
          <button className="blog-loadAppButton" onClick={handleLoadMore}>
            Tải thêm
          </button>
        ) : null}
      </nav> */}
    </Layout>
  );
};

export default Blog;

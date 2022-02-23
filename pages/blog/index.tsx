import BlogItem from "@components/Blog";
import { createClient, Entry } from "contentful";
import { IBlogPostFields } from "contentful/__generated__/types";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ""
});

const Blog = () => {
  const [blogContent, setBlogContent] = useState<Entry<IBlogPostFields>[]>();
  const [loadMore, setLoadMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const loadRef = useRef();

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  const getBlogContent = async () => {
    const { items } = await client.getEntries<IBlogPostFields>({
      content_type: "blogPost"
    });
    if (items.length > 2) {
      setHasMore(true);
    }
    setBlogContent(items.slice(0, 2));
  };

  const getBlogContentFul = async () => {
    const { items } = await client.getEntries<IBlogPostFields>({
      content_type: "blogPost"
    });
    console.log("Load Full!");
    setBlogContent(items);
  };

  const getFields = (slug: string) => {
    return blogContent?.find((h) => h.fields.slug === slug).fields;
  };

  useEffect(() => {
    getBlogContent();
  }, []);

  useEffect(() => {
    if (loadMore && hasMore) {
      console.log("Load more!");
      getBlogContentFul();
      setBlogContent(blogContent);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]);

  useEffect(() => {
    if (blogContent != null) {
      console.log("Has more!");
      const isMore = blogContent.length < 3;
      setHasMore(isMore);
    }
  }, [blogContent]);

  return (
    <>
      <div className="blog">
        {/* hero */}
        <div className="blog-hero">
          <div className="blog-hero_content">
            <Fade direction="down">
              <h1>Bài Viết Mới Nhất</h1>
              <p>“It is better to be young in your failures than old in your successes”</p>
            </Fade>
          </div>
        </div>
        {blogContent ? (
          blogContent.length > 0 ? (
            blogContent.map((item, i) => {
              return (
                <Slide key={item.fields.slug}>
                  <ul className="list-style-type: none;">
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
                </Slide>
              );
            })
          ) : (
            <h2 className="text-center m-5">Không có kết quả</h2>
          )
        ) : (
          <h2 className="text-center m-5">Không có kết quả</h2>
        )}
      </div>
      <nav ref={loadRef} className="blog-loadContainer">
        {hasMore ? (
          <button className="blog-loadAppButton" onClick={handleLoadMore}>
            Tải thêm
          </button>
        ) : null}
      </nav>
    </>
  );
};

export default Blog;

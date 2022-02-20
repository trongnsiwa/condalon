import BlogItem from "@components/Blog";
import { createClient, Entry } from "contentful";
import { IBlogPostFields } from "contentful/__generated__/types";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
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
      content_type: "blogPost",
    });
    if (items.length > 2) {
      setHasMore(true);
    }
    setBlogContent(items.slice(0, 2));
  };

  const getBlogContentFul = async () => {
    const { items } = await client.getEntries<IBlogPostFields>({
      content_type: "blogPost",
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
        <div className="blog-hero"></div>
        {blogContent?.map((item, i) => {
          return (
            <>
              <ul className="list-style-type: none;">
                <li key={item.fields.slug}>
                  <Link href={"/blog/" + item.fields.slug} passHref>
                    <a>
                      <BlogItem
                        image={
                          getFields(item.fields.slug)?.coverImage.fields.file
                            .url
                        }
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
            </>
          );
        })}
      </div>
      <nav ref={loadRef}>
        {hasMore ? (
          <button className="blog-loadAppButton" onClick={handleLoadMore}>Tải thêm</button>
        ) : (
          <p className="blog-loadButton">Không còn kết quả</p>
        )}
      </nav>
    </>
  );
};

export default Blog;

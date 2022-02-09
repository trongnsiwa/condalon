import BlogItem from "@components/Blog";
import { createClient, Entry } from "contentful";
import { IBlogPostFields } from "contentful/__generated__/types";
import { useEffect, useState } from "react";
import Link from "next/link";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

const Blog = () => {
  const [blogContent, setBlogContent] = useState<Entry<IBlogPostFields>[]>();

  const getBlogContent = async () => {
    const { items } = await client.getEntries<IBlogPostFields>({
      content_type: "blogPost",
    });
    setBlogContent(items);
  };

  const getFields = (slug: string) => {
    return blogContent?.find((h) => h.fields.slug === slug).fields;
  };

  useEffect(() => {
    getBlogContent();
  }, []);

  return (
    <>
      <div className="blog">
        {/* hero */}
        <div className="blog-hero"></div>
        {blogContent?.map((item, i) => {
          return (
            <li key={item.fields.slug}>
              <Link href={"/blog/" + item.fields.slug} passHref>
                <a>
                  <BlogItem
                    image={
                      getFields(item.fields.slug)?.coverImage.fields.file.url
                    }
                    title={getFields(item.fields.slug)?.title}
                    publicDate={getFields(item.fields.slug)?.title}
                    owner="Hoang Phuc"
                    description={getFields(item.fields.slug)?.description}
                  />
                </a>
              </Link>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Blog;

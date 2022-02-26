import { BlogApi } from "services/blog";
import Card from "@components/Card";
import Layout from "@components/layouts/Layout";

const blogAPI = new BlogApi();
export async function getServerSideProps(ctx) {
  const keyword = ctx.query.keyword || "";
  let data = await blogAPI.searchBlog({
    content_type: "blogPost",
    "fields.title[match]": keyword
  });
  return {
    props: {
      blogs: data
    }
  };
}
const SearchPage = ({ blogs }) => {
  return (
    <Layout title="Tìm kiếm">
      <div className="container search">
        <div className="search-count">
          <h3>Tìm thấy {blogs?.length} bài viết:</h3>
        </div>
        <div className="search-cards">
          {blogs?.map((item) => {
            return (
              <Card
                title={item.fields.title}
                image={item.fields.coverImage.fields.file.url}
                key={item.sys.id}
                slug={item.fields.slug}
                description={item.fields.description}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;

import Card from "@components/Card";
import SearchBar from "@components/SearchBar";
import SharedForm from "@components/SharedForm";
import { createClient, Entry } from "contentful";
import { IHomeContentFields } from "contentful/__generated__/types";
import { useEffect, useState } from "react";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ""
});

const Home = () => {
  const [homeContent, setHomeContent] = useState<Entry<IHomeContentFields>[]>();

  const getHomeContent = async () => {
    const { items } = await client.getEntries<IHomeContentFields>({
      content_type: "homeContent"
    });

    setHomeContent(items);
  };

  const getFields = (name: string) => {
    return homeContent?.find((h) => h.fields.name === name).fields;
  };

  useEffect(() => {
    getHomeContent();
  }, []);

  return (
    <>
      <div className="home">
        {/* hero */}
        <div className="home-hero">
          <div className="home-hero_content">
            <h1>{getFields("hero")?.title}</h1>
            <p>{getFields("hero")?.description}</p>
            <a href="#blogs">
              <button className="btn-app">Khám Phá Ngay</button>
            </a>
          </div>
        </div>
        {/* blogs */}
        <div id="blogs" className="home-blogs">
          <div className="home-blogs_inner">
            <h1>{getFields("blogs")?.title}</h1>
            <div className="home-blogs_inner-cards">
              <Card
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem faucibus eget natoque condimentum blandit penatibus posuere amet. Neque purus elit in purus, erat sed. Magna mauris nunc augue ut enim."
                image="https://images.unsplash.com/photo-1575926994241-013c0af1513e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem faucibus eget natoque condimentum blandit penatibus posuere amet. Neque purus elit in purus, erat sed. Magna mauris nunc augue ut enim."
                image="https://images.unsplash.com/photo-1525828676209-855204720969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem faucibus eget natoque condimentum blandit penatibus posuere amet. Neque purus elit in purus, erat sed. Magna mauris nunc augue ut enim."
                image="https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
          </div>
        </div>
        {/* desc */}
        <div className="home-desc">
          <div className="home-desc_left">
            <h2>{getFields("desc1")?.title}</h2>
            <p>{getFields("desc1")?.description}</p>
            <button className="btn-app">Xem thêm</button>
          </div>
          <div className="home-desc_right">
            <img
              src="https://images.unsplash.com/photo-1491897554428-130a60dd4757?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
          </div>
        </div>
        {/* desc2 */}
        <div className="home-desc2">
          <div className="home-desc2_dark" />
          <div className="home-desc2_left">
            <img
              src="https://images.unsplash.com/photo-1620553967344-c6d788133f17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="home-desc2_right">
            <h2>{getFields("desc2")?.title}</h2>
            <p>{getFields("desc2")?.description}</p>
            <button className="btn-app">Xem thêm</button>
          </div>
        </div>
        {/* hero2 */}
        <div className="home-hero2" />
        {/* connect */}
        <div className="home-connect">
          <div className="home-connect_left">
            <h2>{getFields("connect")?.title}</h2>
            <p>{getFields("connect")?.description}</p>
            <button className="btn-app">Xem thêm</button>
          </div>
          <div className="home-connect_right">
            <SharedForm />
          </div>
        </div>
        {/* email */}
        <div className="home-email">
          <h2>{getFields("email")?.title}</h2>
        </div>
      </div>
    </>
  );
};

export default Home;

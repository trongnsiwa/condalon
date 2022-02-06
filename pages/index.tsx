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
          </div>
        </div>
        {/* desc */}
        <div className="home-desc"></div>
        {/* desc2 */}
        <div className="home-desc2"></div>
        {/* hero2 */}
        <div className="home-hero2"></div>
        {/* connect */}
        <div className="home-connect"></div>
        {/* email */}
        <div className="home-email"></div>
      </div>
    </>
  );
};

export default Home;

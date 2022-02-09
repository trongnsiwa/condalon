import { createClient, Entry } from "contentful";
import { IIntroduceContentFields } from "contentful/__generated__/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Fade, Flip } from "react-awesome-reveal";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ""
});

const Introduce = () => {
  const [introduceContent, setIntroduceContent] = useState<Entry<IIntroduceContentFields>[]>();

  const getIntroduceContent = async () => {
    const { items } = await client.getEntries<IIntroduceContentFields>({
      content_type: "introduceContent"
    });

    setIntroduceContent(items);
  };

  const getFields = (name: string) => {
    return introduceContent?.find((h) => h.fields.name === name).fields;
  };

  useEffect(() => {
    getIntroduceContent();
  }, []);

  return (
    <>
      <div className = "introduce">
          {/* hero */}
          <div className = "introduce-bgImg"></div>
          <div className = "introduce-preface">
              <div className = "introduce-preface_left">
                  <Fade direction="left">
                      <img src = "https://images.unsplash.com/photo-1551304710-ece312832e87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt=""/>
                  </Fade>
              </div>
              <div className = "introduce-preface_right">
                  <Fade direction="right">
                      <h2>{getFields("preface")?.title}</h2>
                      <p>{getFields("preface")?.description}</p>
                  </Fade>
              </div>
          </div>
          <div className="introduce-goal">
              <div className="introduce-goal_content">
              <Fade direction="right">
                      <h2>{getFields("goal")?.title}</h2>
                      <p>{getFields("goal")?.description}</p>
                  </Fade>
              </div>
          </div>
          <div className="introduce-team">
              <div className = "introduce-team_left">
                  <Fade direction="right">
                      <h2>{getFields("team")?.title}</h2>
                      <p>{getFields("team")?.description}</p>
                      <Link href="/about-us">
                        <button className="btn-app">Xem thêm</button>
                      </Link>
                  </Fade>
              </div>
              <div className = "introduce-team_right">
                  <Fade direction="left">
                      <img src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                  </Fade>
              </div>
          </div>
      </div>
    </>
  );
};

export default Introduce;

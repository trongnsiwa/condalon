import Layout from "@components/layouts/Layout";
import Profile from "@components/Profile";
import { createClient, Entry } from "contentful";
import { IAboutUsContentFields, ITeamProfileFields } from "contentful/__generated__/types";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ""
});

const AboutUs = () => {
  const [aboutContent, setAboutContent] = useState<Entry<IAboutUsContentFields>[]>();
  const [teamProfile, setTeamProfile] = useState<Entry<ITeamProfileFields>[]>();

  const getAboutContent = async () => {
    const { items } = await client.getEntries<IAboutUsContentFields>({
      content_type: "aboutUsContent"
    });

    setAboutContent(items);
  };

  const getTeamProfileContent = async () => {
    const { items } = await client.getEntries<ITeamProfileFields>({
      content_type: "teamProfile",
      order: "fields.name"
    });

    setTeamProfile(items);
  };

  useEffect(() => {
    getAboutContent();
  }, []);

  useEffect(() => {
    getTeamProfileContent();
  }, []);

  return (
    <Layout title="Chúng Tôi Là">
      <div className="about">
        {/* hero */}
        <div className="about-hero">
          <div className="about-hero_content">
            <Fade direction="down">
              <h1>Về Lọ Đựng Sao</h1>
              <p>
                “Dare to live the life you have dreamed for yourself. Go forward and make your
                dreams come true.”
              </p>
            </Fade>
          </div>
        </div>
        <div className="text-center">
          <Fade direction="up">
            <h1 className="about-content">{aboutContent?.map((a) => a.fields.heading)[0]}</h1>
            <h5 className="about-subcontent">
              {aboutContent?.map((a) => a.fields.description)[0]}
            </h5>
          </Fade>
        </div>
        <div className="about-profile">
          <div className="about-profile_inner">
            <div className="about-profile_inner-cards">
              {teamProfile?.map((p) => (
                <Profile
                  key={p.sys.id}
                  name={p.fields.name}
                  description={p.fields.description}
                  image={p.fields.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;

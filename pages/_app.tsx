import Layout from "@components/layouts/Layout";

import "../styles/globals.scss";
import "../styles/custom.scss";
import "../styles/nprocess.scss";
import dynamic from "next/dynamic";
import { DefaultSeo } from "next-seo";

const TopProgressBar = dynamic(
  () => {
    return import("@components/TopProgressBar");
  },
  { ssr: false }
);

const defaultUrl = "https://condalon.netlify.app/";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Bố Mẹ Ơi, Con Đã Lớn | Lọ Đựng Sao Team"
        description="Hãy tiếp tục viết nên câu chuyện ước mơ của bạn. Truy cập ngay để dược truyền cảm hứng về tuổi trẻ và ước mơ!"
        canonical={defaultUrl}
        additionalLinkTags={[
          {
            rel: "icon",
            href: `${defaultUrl}favicon-32x32.png`,
            type: "image/png",
            sizes: "32x32"
          },
          {
            rel: "icon",
            href: `${defaultUrl}favicon-16x16.png`,
            type: "image/png",
            sizes: "16x16"
          },
          {
            rel: "apple-touch-icon",
            href: `${defaultUrl}apple-touch-icon.png`,
            sizes: "180x180"
          },
          {
            rel: "manifest",
            href: "/site.webmanifest"
          }
        ]}
        openGraph={{
          type: "website",
          url: defaultUrl,
          title: "Bố Mẹ Ơi, Con Đã Lớn | Lọ Đựng Sao Team",
          description:
            "Hãy tiếp tục viết nên câu chuyện ước mơ của bạn. Truy cập ngay để dược truyền cảm hứng về tuổi trẻ và ước mơ!",
          images: [
            {
              url: `${defaultUrl}images/hero.jpg`
            }
          ],
          site_name: "Bố Mẹ Ơi, Con Đã Lớn",
          profile: {
            firstName: "Lọ",
            lastName: "Đựng Sao",
            username: "lodungsao2022"
          }
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1
        }}
        facebook={{
          appId: "1234567890"
        }}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Lọ Đựng Sao"
          },
          {
            name: "application-name",
            content: "Bố Mẹ Ơi, Con Đã Lớn"
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1"
          }
        ]}
      />

      <TopProgressBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import Layout from "@components/layouts/Layout";

import "../styles/globals.scss";
import "../styles/custom.scss";
import "../styles/nprocess.scss";
import dynamic from "next/dynamic";

const TopProgressBar = dynamic(
  () => {
    return import("@components/TopProgressBar");
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <TopProgressBar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

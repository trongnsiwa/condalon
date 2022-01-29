import Layout from "@components/layouts/Layout";

import "../styles/globals.scss";
import "../styles/custom.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

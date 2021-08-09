import "../styles/globals.css";
import SiteLayout from "../src/components/Layouts/SiteLayout";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout children={page} />);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;

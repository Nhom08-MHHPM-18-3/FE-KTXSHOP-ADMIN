import "../styles/globals.css";
import "antd/dist/antd.css";
import "../styles/Home.module.css";
import { CategoryProvider } from "../context/CategoryState";

function MyApp({ Component, pageProps }) {
  return (
    <CategoryProvider>
      <Component {...pageProps} />
    </CategoryProvider>
  );
}

export default MyApp;

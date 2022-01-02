import "../styles/globals.scss";
import { Provider } from "jotai";
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

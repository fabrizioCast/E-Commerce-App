import { globalStyles } from "../components/Layout/styles";
import initAuth from "../utils/initAuth";

import moment from "moment";

initAuth();

// Moment JS
moment.locale("es");

const MyApp = function ({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default MyApp;

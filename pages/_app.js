import { globalStyles } from "../components/Layout/styles";
import initAuth from "../utils/initAuth";

import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import moment from "moment";

initAuth();
const firebaseConfig = {
  apiKey: "AIzaSyAcoRVvDKi_XxgslN21-ShoDsHvJoohbYc",
  authDomain: "test-app-77ad3.firebaseapp.com",
  projectId: "test-app-77ad3",
  storageBucket: "test-app-77ad3.appspot.com",
  messagingSenderId: "240089969790",
  appId: "1:240089969790:web:b46f78898596ff390d142f",
  measurementId: "G-7TGYFVRSRQ",
};
firebase.initializeApp(firebaseConfig);
firebase.storage();

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

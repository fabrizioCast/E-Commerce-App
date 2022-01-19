// ./initAuth.js
import { init } from "next-firebase-auth";

const initAuth = () => {
  init({
    authPageURL: "/login",
    appPageURL: "/",
    loginAPIEndpoint: "/api/login", // required
    logoutAPIEndpoint: "/api/logout", // required
    onLoginRequestError: (err) => {
      console.error(err);
    },
    onLogoutRequestError: (err) => {
      console.error(err);
    },
    firebaseAdminInitConfig: {
      credential: {
        projectId: "test-app-77ad3",
        clientEmail:
          "firebase-adminsdk-ux723@test-app-77ad3.iam.gserviceaccount.com",
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: "https://my-example-app.firebaseio.com",
    },
    // Use application default credentials (takes precedence over fireaseAdminInitConfig if set)
    // useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      apiKey: "AIzaSyAcoRVvDKi_XxgslN21-ShoDsHvJoohbYc",
      authDomain: "test-app-77ad3.firebaseapp.com",
      projectId: "test-app-77ad3",
      storageBucket: "test-app-77ad3.appspot.com",
      messagingSenderId: "240089969790",
      appId: "1:240089969790:web:b46f78898596ff390d142f",
      measurementId: "G-7TGYFVRSRQ",
    },
    cookies: {
      name: "testApp", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: false, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err);
    },
    onTokenRefreshError: (err) => {
      console.error(err);
    },
  });
};

export default initAuth;

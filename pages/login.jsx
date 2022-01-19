// React
import React, { useEffect, useState } from "react";

//Next JS
import Link from "next/link";

// Firebase
import firebase from "utils/firebase";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { AuthAction, withAuthUser } from "next-firebase-auth";

// Firebase UI
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Components
import Button from "../components/Button";
import createUser from "utils/createUser";

const firebaseAuthConfig = {
  signInFlow: "popup",
  signInOptions: [
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
    },
    {
      provider: GithubAuthProvider.PROVIDER_ID,
    },
  ],
  signInSuccessUrl: "/tienda",
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const Login = () => {
  useEffect(() => {
    const authObserver = firebase.auth().onAuthStateChanged((user) => {
      if (!user) return;

      createUser(user); // async function;
    });
    return () => {
      authObserver();
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Iniciar session</h1>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig}
        firebaseAuth={firebase.auth()}
      />

      <Link href="/">
        <a>
          <Button>Ir al inicio</Button>
        </a>
      </Link>
    </div>
  );
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.REDIRECT_TO_APP,
})(Login);

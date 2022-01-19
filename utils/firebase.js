import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAcoRVvDKi_XxgslN21-ShoDsHvJoohbYc",
    authDomain: "test-app-77ad3.firebaseapp.com",
    projectId: "test-app-77ad3",
    storageBucket: "test-app-77ad3.appspot.com",
    messagingSenderId: "240089969790",
    appId: "1:240089969790:web:b46f78898596ff390d142f",
    measurementId: "G-7TGYFVRSRQ",
  });
}

export default firebase;

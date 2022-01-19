import { doc, getFirestore, setDoc } from "firebase/firestore";
import checkUser from "./checkUser";

export default async function createUser(user) {
  const { displayName, email, uid, photoURL } = user;

  const isUserExists = await checkUser(uid);
  if (isUserExists) return false;

  const db = getFirestore();

  const userRef = doc(db, "users", uid);

  const userData = {
    displayName,
    email,
    uid,
    photoURL,
    createdAt: new Date(),
  };

  return await setDoc(userRef, userData);
}

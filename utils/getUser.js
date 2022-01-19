import { doc, getDoc, getFirestore } from "firebase/firestore";

export default async function getUser(id) {
  const db = getFirestore();
  const user = doc(db, "users", id);
  const userData = await getDoc(user);

  if (!userData.exists()) return null;

  return {
    ...userData.data(),
    createdAt: userData.data().createdAt.toJSON(),
  };
}

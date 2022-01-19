import { getFirestore, doc, getDoc } from "firebase/firestore";

export default async function checkUser(id) {
  const db = getFirestore();
  const user = doc(db, "users", id);
  const userData = await getDoc(user);

  return userData.exists();
}

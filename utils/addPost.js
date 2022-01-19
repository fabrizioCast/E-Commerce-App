import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

export default async function addPost(form, img, categories, user) {
  const { title, price, description } = form;
  const { displayName, id, photoURL } = user;

  const db = getFirestore();
  const productsRef = collection(db, "products");

  return await addDoc(productsRef, {
    title,
    description,
    price,
    author: { name: displayName, id, photoURL },
    img,
    categories,
    createdAt: serverTimestamp(),
    lastModified: serverTimestamp(),
  });
}

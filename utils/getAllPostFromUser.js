import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default async function getAllPostFromUser(id) {
  const db = getFirestore();

  const productsRef = collection(db, "products");

  const q = query(productsRef, where("author.id", "==", id));

  const queryGet = await getDocs(q);

  let data = [];
  queryGet.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt.toJSON(),
      lastModified: doc.data().lastModified.toJSON(),
    });
  });

  return data;
}

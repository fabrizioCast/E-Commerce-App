// Firebase
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

// Moment JS
import moment from "moment";

export default async function getAllPost() {
  const db = getFirestore();

  const productsRef = collection(db, "products");
  const q = query(productsRef);
  const queryGet = await getDocs(q);

  let data = [];
  queryGet.forEach((doc) => {
    const { price, title, author, img, createdAt } = doc.data();
    const dateFromNow = moment(createdAt.toDate()).fromNow();
    data.push({
      price,
      title,
      author,
      img,
      createdAt: dateFromNow,
      id: doc.id,
    });
  });

  return data;
}

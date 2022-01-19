import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  limit,
} from "firebase/firestore";

/**
 *
 * @param {Array} category Array de la categoria
 * @param {number} max Limite de resultados a retornar, por defecto 10
 */

export default async function getPostFromCategory(category, max = 10) {
  console.log(category);
  const db = getFirestore();
  const postsRef = collection(db, "products");

  const q = query(
    postsRef,
    where("categories", "array-contains-any", category),
    limit(max)
  );

  const queryData = await getDocs(q);

  let posts = [];
  queryData.forEach((doc) =>
    posts.push({
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt.toJSON(),
      lastModified: doc.data().lastModified.toJSON(),
    })
  );

  return posts;
}

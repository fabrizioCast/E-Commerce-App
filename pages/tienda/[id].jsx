// Firebase
import { doc, getDoc, getFirestore } from "firebase/firestore";

// Moment JS
import moment from "moment";
import getPostFromCategory from "utils/getPostFromCategory";

// Components
import Layout from "../../components/Layout";
import ProducInfo from "../../components/ProducInfo";

const Products = ({ posts, relatedPosts }) => {
  const { title, price, author, img, createdAt, description, categories } =
    posts;
  console.log(relatedPosts);

  return (
    <Layout title={`${title}`}>
      <ProducInfo
        title={title}
        price={price}
        description={description}
        author={author}
        img={img}
        time={createdAt}
        categories={categories}
        relatedPosts={relatedPosts}
      />
    </Layout>
  );
};

export default Products;

export async function getServerSideProps(ctx) {
  const { id } = ctx.query;
  const db = getFirestore();

  const doce = doc(db, "products", id);

  const product = await getDoc(doce);

  const { description, price, author, img, createdAt, title, categories } =
    product.data();

  const dateFromNow = moment(createdAt.toDate()).fromNow();

  let posts = {
    id: product.id,
    title,
    author,
    description,
    price,
    img,
    createdAt: dateFromNow,
    categories,
  };

  let relatedPosts = await getPostFromCategory(categories);

  return {
    props: {
      posts,
      relatedPosts,
    },
  };
}

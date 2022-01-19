// Styled Components
import { AccountLastPostsWrapper, AccountProfileTitle } from "./styles";

// Components
import ProductCard from "../ProductCard";

const AccountLastPosts = ({ lastPosts }) => {
  const renderLastPosts = () => {
    return lastPosts.map(({ id, title, author, price, img, createdAt }) => (
      <ProductCard
        key={id}
        id={id}
        title={title}
        price={price}
        author={author.name}
        authorID={author.id}
        image={img[0].url}
      />
    ));
  };

  return (
    <div>
      <AccountProfileTitle>Últimas Publicaciones</AccountProfileTitle>
      <AccountLastPostsWrapper>
        {lastPosts.length !== 0 ? renderLastPosts() : <p>No posts yet</p>}
      </AccountLastPostsWrapper>
    </div>
  );
};

export default AccountLastPosts;

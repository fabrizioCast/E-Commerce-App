import { RelatedPostItem, RelatedPostsWrapper } from "./RelatedPostsStyles";

const RelatedPosts = ({ relatedPosts }) => {
  console.log(relatedPosts);
  return (
    <div>
      <h1>Publicaciones Relacionadas</h1>
      <RelatedPostsWrapper>
        {relatedPosts.map((el, index) => (
          <RelatedPostItem key={index}>
            <h1>{el.title}</h1>
            <p>{el.author.name}</p>
            <p>{el.description}</p>
          </RelatedPostItem>
        ))}
      </RelatedPostsWrapper>
    </div>
  );
};

export default RelatedPosts;

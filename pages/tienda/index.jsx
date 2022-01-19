// Next JS
import Link from "next/link";

// Components
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";

// Utils
import getAllPost from "utils/getAllPost";

import styled from "styled-components";

export const StoreWrapper = styled.section`
  background: #373943;
  padding: 15px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const StoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const StoreTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const store = ({ data }) => {
  return (
    <Layout title="Store | MarketPlace App">
      <StoreHeader>
        <StoreTitle>Ultimas Publicaciones</StoreTitle>
        <Link href="/tienda/new">
          <a>
            <Button>¡Vender!</Button>
          </a>
        </Link>
      </StoreHeader>
      <StoreWrapper>
        {data.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            author={product.author.name}
            authorID={product.author.id}
            createdAt={product.createdAt}
            image={product.img[0].url}
            auction={false}
          />
        ))}
      </StoreWrapper>
    </Layout>
  );
};

export async function getServerSideProps() {
  const data = await getAllPost();

  return {
    props: {
      data,
    },
  };
}

export default store;

import styled from "styled-components";

export const ProducInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;

  border-radius: 15px;

  @media (min-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr min-content;
    height: calc(100vh - 200px);
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr auto;
  }
`;

export const ProductImage = styled.img`
  background-color: #373943;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  min-height: 300px;
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
  display: ${(props) => (props.visible ? "none" : "block")};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ProducDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px 0;

  @media (min-width: 767px) {
    padding: 0 20px;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
`;

export const ProductCategoryWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 150px));
  gap: 20px;
`;

export const ProductCategoryItem = styled.a`
  color: #fff;
  text-align: center;
  border-radius: 5px;
  background-color: #373943;
  padding: 5px 10px;
  border: 1px solid transparent;
  transition: border 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border-color: #2279ca;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1.3rem;
`;

// Shop Details
export const ProductShopDetails = styled.div`
  border: 1px solid #373943;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: max-content;
  padding: 15px;
  width: 100%;
  position: relative;
  margin-top: 20px;

  @media (min-width: 767px) {
    margin-top: 0;
  }
`;

export const ProductSellerTitle = styled.span`
  position: absolute;
  top: -12px;
  background-color: #2b2c33;
`;

export const ProductSellerInfo = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const ProductSellerName = styled.h4`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const ProductSellerAvatar = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  border: 1px solid #373943;
`;

export const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

export const ProductPriceValue = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ProductAddToCart = styled.button`
  border: none;
  outline: none;
  width: 100%;
  background-color: #2f82fb;
  padding: 10px 50px;
  border-radius: 3px;
  color: #fff;
  transition: background-color 0.3s ease-in-out;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    background-color: #0868f3;
  }
`;

export const ProductPriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

// SPINER
export const SpinnerWrapper = styled.div`
  background-color: #373943;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

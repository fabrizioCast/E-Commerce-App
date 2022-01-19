import Image from "next/image";
import styled from "styled-components";

// Wrapper for the product card
export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #272a34;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    #price {
      filter: drop-shadow(0px 0px 10px rgba(56, 242, 174, 0.5));
    }
  }
`;

// Image for the product card
export const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ProductImage = styled(Image)`
  border-radius: 10px 10px 0 0;
`;

// Name and Author for the product card
export const ProductInfoWrapper = styled.div`
  width: 100%;
  padding: 20px 20px 50px 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5px;
  border-bottom: 1px solid #343741;
`;

export const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
`;

export const ProductAuthor = styled.p`
  width: max-content;
  font-size: 0.8rem;
  color: #828282;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ProductCreatedAt = styled.p`
  font-size: 0.8rem;
  color: #828282;
`;

// Price for the product card
export const ProductPriceWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductType = styled.p`
  font-size: 16px;
  color: #38f2af;
  font-weight: bold;
`;

export const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  border-radius: 20px;
  border: 1px solid #38f2af;
  padding: 5px 10px;

  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(56, 242, 174, 0.5));
  }
`;

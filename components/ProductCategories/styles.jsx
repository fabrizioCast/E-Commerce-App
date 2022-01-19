import styled from "styled-components";

export const ProductCategoriesWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  width: 100%;
`;

export const ProductCategoriesItem = styled.button`
  align-items: center;
  background-color: ${({ select }) => (select ? "#2279ca" : "#2b2c33")};
  border-radius: 5px;
  border: 2px solid transparent;
  color: #fff;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  justify-content: center;
  min-height: 50px;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border-color: #2279ca;
  }
`;

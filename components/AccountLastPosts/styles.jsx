import styled from "styled-components";

export const AccountLastPostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 450px));
    grid-gap: 20px;
  }
`;

export const AccountProfileTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const AccountLastPostsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

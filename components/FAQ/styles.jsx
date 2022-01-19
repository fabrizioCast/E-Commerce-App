import styled from "styled-components";

export const FaqWrapper = styled.section`
  margin: 100px 0 50px 0;
`;

export const FaqTitle = styled.h2`
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const FaqList = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const FaqListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 50px 0;
  @media (min-width: 768px) {
    padding: 5px;
  }
`;

export const FaqListItemTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 18px;
`;

export const FaqListItemContent = styled.p`
  font-size: 16px;
`;

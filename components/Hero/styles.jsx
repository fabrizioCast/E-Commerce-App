import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  min-height: 90vh;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: bold;
  font-size: 3.5rem;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.h2`
  margin-top: 5px;
  font-size: 1.5rem;
  font-weight: normal;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const HeroTextStrong = styled.span`
  color: #38f2af;
`;

export const HeroButton = styled.button`
  margin-top: 15px;
  background-color: #38f2af;
  border: none;
  border-radius: 15px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
`;

export const HeroImage = styled.div``;

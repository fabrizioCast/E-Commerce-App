// Mobile First 🟢

import styled from "styled-components";

export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const AboutTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

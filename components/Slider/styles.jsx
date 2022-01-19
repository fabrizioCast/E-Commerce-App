import styled from "styled-components";

export const SliderWrapper = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b2c33;
  margin: 0 auto;

  @media (min-width: 767px) {
    max-width: 100%;
    max-height: 100%;

    img {
      max-height: 90vh;
    }
  }
`;

export const SlideClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #18181a;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #fff;
  font-weight: bold;
  z-index: 1001;
  border: 1px solid transparent;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: 1px solid #fff;
    cursor: pointer;
  }
`;

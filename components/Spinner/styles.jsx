import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.heigth || "50px"};
  border-radius: 50%;
  border-left-color: #09f;
  border-width: ${(props) => props.border || "5px"};

  animation: spin 1s ease infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

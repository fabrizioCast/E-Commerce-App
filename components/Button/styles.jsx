import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: ${({ bgColor }) => bgColor || "#38f2af"};
  color: ${({ textColor }) => textColor || "#fff"};
  border: none;
  border-radius: ${({ radius }) => radius || "5px"};
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ bgColor }) => bgColor + "CC"};
  }
`;

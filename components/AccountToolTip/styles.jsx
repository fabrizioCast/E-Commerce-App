import styled from "styled-components";

export const ToolTipWrapper = styled.div`
  background-color: #373943;
  display: flex;
  flex-direction: column;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #444c56;
`;

export const ToolTipItem = styled.a`
  width: 100%;
  min-height: 30px;
  max-height: 50px;
  padding: ${({ padding }) => (padding ? padding : "4px 8px 4px 16px")};
  border-bottom: ${({ separator }) => separator && "1px solid #444c56"};

  &:hover {
    ${({ noHover }) =>
      noHover ||
      `
      cursor: pointer;
      background-color: #316dca;
    `}
  }
`;

export const ToolTipUsername = styled.span`
  display: block;
  font-weight: bold;
`;

// Mobile First 🟢

import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: #373943;
  border: 1px solid transparent;
  transition: border 0.5s ease-in-out;
  color: #fff;
  border-radius: 10px;
  padding: 5px 10px;
  height: 40px;

  &:hover {
    cursor: text;
  }

  &:focus-within {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

export const SearchBarInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 0;
  color: #fff;
  background-color: transparent;
  transition: width 0.5s;

  @media (min-width: 767px) {
    width: 150px;
    &:focus {
      width: 200px;
    }
  }
`;

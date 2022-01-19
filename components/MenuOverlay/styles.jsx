import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #25272e;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: left 0.5s ease-in-out;
  left: ${(props) => (props.isOpen ? "0" : "-100%")};
`;

export const OverlayItem = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${({ active }) => active && "#38f2af"};
  padding: 5px 10px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

import styled from "styled-components";

export const NavBarS = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #383940;
  background-color: #25272e;
  z-index: 999;
`;

export const NavBarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  color: #38f2af;
  margin-right: 10px;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const NavBarItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${(props) => (props.gap ? props.gap : "5px")};
  flex-grow: ${(props) => (props.grow ? props.grow : "0")};

  @media (max-width: 767px) {
    display: ${(props) => !props.displaySm && "none"};
  }

  @media (min-width: 768px) {
    display: ${(props) => props.displaySm && "none"};
  }
`;

export const NavBarItemLink = styled.a`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #38f2af;
  }

  ${({ active }) =>
    active &&
    `&:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 5px;
      border-radius: 5px;
      background-color: #38F2AF;
      bottom: -10px;
      left: 0;
    }`}
`;

export const NavBarItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  padding: 0;
  transition: background-color 0.2s;
  background-color: transparent;
  z-index: 11;

  &:hover {
    cursor: pointer;
  }
`;

export const NavBarItemIcon = styled(NavBarItemButton)`
  background-color: transparent;
  gap: 5px;
  z-index: 10;
`;

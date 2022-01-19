/* eslint-disable @next/next/link-passhref */
//React Js
import { useState } from "react";
// React
import React from "react";

// Next JS
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//Firebase
import { withAuthUser } from "next-firebase-auth";

// Styled Components
import {
  NavBarS,
  NavBarLogo,
  NavBarItem,
  NavBarItemButton,
  NavBarItemLink,
} from "./styles";

// Components
import SearchBar from "../SearchBar";
import MenuOverlay from "../MenuOverlay";
import Logo from "../Images/Logo";
import NavBarAvatar from "./NavBarAvatar";

const NavBar = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <NavBarS>
      <NavBarItem displaySm>
        <NavBarItemButton onClick={handleIsOpen}>
          <Image
            src={`/icons/${isOpen ? "x" : "menu"}.svg`}
            width={30}
            height={30}
            alt="Open menu"
          />
        </NavBarItemButton>
      </NavBarItem>
      <NavBarLogo>
        <Link href="/">
          <a>
            <Logo height={53} width="100%" />
          </a>
        </Link>
      </NavBarLogo>
      <NavBarItem gap="20px" grow="1">
        <Link href="/tienda">
          <NavBarItemLink active={router.pathname === "/tienda" && true}>
            Tienda
          </NavBarItemLink>
        </Link>
      </NavBarItem>
      <NavBarItem>
        <SearchBar />
      </NavBarItem>
      <NavBarAvatar />

      <NavBarItem displaySm>
        <NavBarAvatar displaySm={true} />
      </NavBarItem>

      <MenuOverlay isOpen={isOpen} />
    </NavBarS>
  );
};

export default React.memo(withAuthUser()(NavBar));

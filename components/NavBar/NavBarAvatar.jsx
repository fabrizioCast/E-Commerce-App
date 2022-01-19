// React
import React from "react";

// Next JS
import Image from "next/image";
import Link from "next/link";

// Styled Components
import { NavBarItem, NavBarItemIcon } from "./styles";

// Firebase
import { useAuthUser } from "next-firebase-auth";

// Tippy Tooltip
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// Components
import Avatar from "../Avatar";
import AccountToolTip from "../AccountToolTip";
import Button from "components/Button";

const NavBarAvatar = ({ displaySm }) => {
  const { id, photoURL } = useAuthUser();
  return (
    <NavBarItem displaySm={displaySm}>
      {id !== null ? (
        <Tippy
          content={<AccountToolTip />}
          placement="bottom-start"
          trigger="click"
          interactive
        >
          <NavBarItemIcon>
            <Avatar
              src={photoURL !== null ? photoURL : "/icons/user.svg"}
              alt="User Avatar"
            />
            <Image
              src="/icons/chevron-down.svg"
              alt="Caret Down"
              width={30}
              height={30}
            />
          </NavBarItemIcon>
        </Tippy>
      ) : (
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      )}
    </NavBarItem>
  );
};

export default NavBarAvatar;

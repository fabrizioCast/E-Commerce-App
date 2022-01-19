/* eslint-disable @next/next/link-passhref */

// Next JS
import Link from "next/link";
import { useRouter } from "next/router";

// Styled Components
import { Overlay, OverlayItem } from "./styles";

const MenuOverlay = ({ isOpen }) => {
  const router = useRouter();
  return (
    <>
      <Overlay isOpen={isOpen}>
        <Link href="/">
          <OverlayItem active={router.pathname === "/" && true}>
            Home
          </OverlayItem>
        </Link>
        <Link href="/tienda">
          <OverlayItem active={router.pathname === "/tienda" && true}>
            Store
          </OverlayItem>
        </Link>
      </Overlay>
    </>
  );
};

export default MenuOverlay;

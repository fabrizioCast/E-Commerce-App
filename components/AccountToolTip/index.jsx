// Next JS
import Link from "next/link";
import { useRouter } from "next/router";

// Firebase
import { useAuthUser } from "next-firebase-auth";
import firebase from "firebase/compat/app";

// Styled Components
import { ToolTipItem, ToolTipUsername, ToolTipWrapper } from "./styles";

const AccountToolTip = () => {
  const { displayName, id } = useAuthUser();
  const router = useRouter();

  const singOut = async () => {
    await firebase.auth().signOut();
    router.push("/");
  };
  return (
    <ToolTipWrapper>
      <ToolTipItem noHover separator>
        Bienvenido <ToolTipUsername>{displayName}</ToolTipUsername>
      </ToolTipItem>

      <Link href={`/profile/${id}`}>
        <ToolTipItem>Tu perfil</ToolTipItem>
      </Link>
      <Link href={`/profile/${id}`}>
        <ToolTipItem separator>Tu carrito</ToolTipItem>
      </Link>

      <Link href="/help">
        <ToolTipItem>Ayuda</ToolTipItem>
      </Link>
      <Link href="/config">
        <ToolTipItem separator>Configuración</ToolTipItem>
      </Link>

      <ToolTipItem onClick={singOut}>Cerrar sessión</ToolTipItem>
    </ToolTipWrapper>
  );
};

export default AccountToolTip;

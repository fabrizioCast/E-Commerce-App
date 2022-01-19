// Components
import Head from "next/head";
import NavBar from "../NavBar";
import Footer from "../Footer";

// Styled Components
import { Main } from "./styles";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Main>{children}</Main>

      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "E-Commerce App",
};

export default Layout;

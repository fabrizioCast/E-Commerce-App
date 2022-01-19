// Firebase
import {
  AuthAction,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";
import AccountProfile from "components/AccountProfile";

// Components
import Layout from "components/Layout";

// Utils
import getUser from "utils/getUser";
import getAllPostFromUser from "utils/getAllPostFromUser";

const Account = ({ lastPosts, user }) => {
  const { displayName } = user;

  return (
    <Layout title={displayName}>
      <AccountProfile lastPosts={lastPosts} user={user} />
    </Layout>
  );
};

// TODO: quitar el que se pueda acceder solo cuando esta logeado
export async function getServerSideProps(ctx) {
  const { id } = ctx.query;

  const lastPosts = await getAllPostFromUser(id);
  const user = await getUser(id);

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      lastPosts,
      user,
    },
  };
}

export default withAuthUser({})(Account);

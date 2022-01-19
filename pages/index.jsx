import About from "../components/About";
import Faq from "../components/FAQ";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout title="Home | MarketPlace App">
      <Hero />
      <About />
      <Faq />
    </Layout>
  );
}

export default Home;

import type { NextPage } from "next";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div style={{ height: "2000px", paddingTop: "60px" }}>
        test scroll to top
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;

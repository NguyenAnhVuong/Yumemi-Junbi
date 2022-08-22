import type { NextPage } from "next";
import provinceApi from "../api/provinceApi";
import Header from "../components/Header";
import ProvinceList from "../components/ProvinceList";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Province } from "../models";

type HomeProps = {
  provinces: Province[];
};

const Home: NextPage<HomeProps> = ({ provinces }: HomeProps) => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "60px" }}>
        <ProvinceList provinces={provinces} />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await provinceApi.getAllProvinces();
  if (res === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: { provinces: res },
  };
}

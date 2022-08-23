import type { NextPage } from "next";
import { useState } from "react";
import provinceApi from "../api/provinceApi";
import Header from "../components/Header";
import PopulationGraph from "../components/PopulationGraph";
import ProvinceList from "../components/ProvinceList";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Province } from "../models";
import HomeStyles from "../styles/Home.module.css";

type HomeProps = {
  provinces: Province[];
};

const Home: NextPage<HomeProps> = ({ provinces }: HomeProps) => {
  const [selectedProvinces, setSelectedProvinces] = useState<Province[]>([]);

  return (
    <div>
      <Header />
      <div className={HomeStyles.screen}>
        <div className={HomeStyles.container}>
          {selectedProvinces && selectedProvinces.length > 0 ? (
            <PopulationGraph selectedProvinces={selectedProvinces} />
          ) : (
            <p className={HomeStyles.message}>都道府県を選択してください。</p>
          )}
          <ProvinceList
            provinces={provinces}
            selectedProvinces={selectedProvinces}
            setSelectedProvinces={setSelectedProvinces}
          />
        </div>
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

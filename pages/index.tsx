import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import provinceApi from "../api/provinceApi";
import DarkLightToggle from "../components/DarkLightToggle";
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeFromLocal = localStorage.getItem("isDarkMode");
    if (isDarkModeFromLocal) {
      if (isDarkModeFromLocal === "true") {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setIsDarkMode(true);
      }
    }
  }, []);

  return (
    <div className={`${isDarkMode && HomeStyles.dark_mode_container}`}>
      <Head>
        <title>Yumemi-Junbi</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header isDarkMode={isDarkMode} />
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
      <DarkLightToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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

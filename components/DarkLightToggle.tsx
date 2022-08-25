import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import HomeStyles from "../styles/Home.module.css";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

const DarkLightToggle = ({ isDarkMode, setIsDarkMode }: Props) => {
  const toggleDarkLight = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", String(!isDarkMode));
  };

  return (
    <button className={HomeStyles.dark_mode_toggle} type="button">
      {isDarkMode ? (
        <BsFillSunFill
          size={"24px"}
          color="#FFB200"
          onClick={() => toggleDarkLight()}
        />
      ) : (
        <FaMoon
          size={"24px"}
          color="#FFB200"
          onClick={() => toggleDarkLight()}
        />
      )}
    </button>
  );
};

export default DarkLightToggle;

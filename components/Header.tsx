import Image from "next/image";
import React from "react";
import HeaderStyles from "../styles/Header.module.css";
import moment from "moment";
import "moment/locale/ja";

moment.locale("ja");

type Props = {
  isDarkMode: boolean;
};

const Header = ({ isDarkMode }: Props) => {
  const gotoTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div
      className={`${HeaderStyles.header} ${
        isDarkMode && HeaderStyles.dark_mode_header
      }`}
    >
      <div className={HeaderStyles.header__container}>
        <div className={HeaderStyles.header__logo_title} onClick={gotoTop}>
          <Image
            src="https://www.yumemi.co.jp/images/logo_yumemi_01.svg"
            alt="Yumemi Logo"
            width={48}
            height={48}
          />
          <span className={HeaderStyles.header__title}>総人口推移グラフ</span>
        </div>
        <div className={HeaderStyles.header__today}>
          {moment().format("LL")}
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import HomeStyles from "../styles/Home.module.css";

type Props = {};

const ScrollToTopButton = (props: Props) => {
  const gotoTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <button
      className={HomeStyles.scroll_to_top_btn}
      type="button"
      onClick={gotoTop}
    >
      <IoIosArrowUp size={28} />
    </button>
  );
};

export default ScrollToTopButton;

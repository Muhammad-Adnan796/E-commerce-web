import React from "react";
import css from "./Virtual.module.css";
import Shade from "../../Assets/shade.png";
import ReactCompareImage from "react-compare-image";
import Before from "../../Assets/before.png";
import After from "../../Assets/after.png";

const Virtual = () => {
  return (
    <>
      <div className={css.virtual}>
        <div className={css.left}>
          <span>Virtual-TryOn</span>
          <span>Never Buy the wrong Shade Again!</span>
          <span>Try Now!</span>
          <img src={Shade} alt="" />
        </div>

        <div className={css.right}>
          <div className={css.wrapper}>
            <ReactCompareImage leftImage={Before} 
            rightImage={After} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Virtual;

import React from "react";
import fullbanner from "../../../src/fullbanner.png";
import "./index.scss";

function FullBanners() {
  console.log("Esta é uma mensagem de log");
  return (
    <div className="fullbanner">
      <img src={fullbanner} alt="banner" />
    </div>
  );
}

export default FullBanners;
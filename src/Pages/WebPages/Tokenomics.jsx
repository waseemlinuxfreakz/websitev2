import React from "react";
import WebHeader from "../../HeaderFooterSidebar/WebHeaderFooter/WebHeader";
import WebFooter from "../../HeaderFooterSidebar/WebHeaderFooter/WebFooter";
import IntroducingEMMET from "./TokenomicsComponents/IntroducingEMMET";
import TokenomicsBox from "./TokenomicsComponents/TokenomicsBox";
import Distribution from "./TokenomicsComponents/Distribution";
import BorderLine from "../../assets/img/web/Tokenomics/line.png";

import "./Tokenomics.css";

function Tokenomics() {
  return (
    <>
      <div className="webWraper tokenomics">
        <WebHeader />
        <div className="tokenomicsWrap">
          <IntroducingEMMET />
          <span className="borderLine">
            <img src={BorderLine} alt="BorderLine" />
          </span>
          <Distribution />
          <TokenomicsBox />
        </div>
        <WebFooter />
      </div>
    </>
  );
}

export default Tokenomics;

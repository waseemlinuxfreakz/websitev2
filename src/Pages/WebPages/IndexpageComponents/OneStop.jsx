import React from "react";

import "./OneStop.css";

import OneStop1 from "../../../assets/img/web/OneStop/1.png";
import OneStop2 from "../../../assets/img/web/OneStop/2.png";
import OneStop3 from "../../../assets/img/web/OneStop/3.png";
import OneStop4 from "../../../assets/img/web/OneStop/4.png";
import OneStop5 from "../../../assets/img/web/OneStop/5.png";

function OneStop() {
  return (
    <>
      <div className="oneStopContainer">
        <div className="container">
          <div className="oneStopContent">
            <h2>One Stop Decentralized DeFi Solution</h2>
            <div className="oneStopImges">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="onestopBox">
                    <h3>Transfer</h3>
                    <img src={OneStop1} className="OneStopImg" alt="One Stop" />
                    <p>
                      Bridge your assets cross-chain. Earn rewards and access
                      EMMET liquidity pools
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="onestopBox">
                    <h3>Swap</h3>
                    <img src={OneStop2} className="OneStopImg" alt="One Stop" />
                    <p>
                      Experience seamless and secure asset exchanges with Emmet
                      Finance's cutting-edge swap feature, designed for
                      efficiency and simplicity
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="onestopBox">
                    <h3>Stake EMMET and Earn</h3>
                    <img src={OneStop3} className="OneStopImg" alt="One Stop" />
                    <p>
                      Lock your EMMET tokens and receive veEMMET governance
                      token. Become a part of EMMET finance ecosystem
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="onestopBox">
                    <h3>Lend</h3>
                    <img src={OneStop4} className="OneStopImg" alt="One Stop" />
                    <p>
                      Unlock boundless financial possibilities by depositing
                      assets to earn interest and accessing borrowing
                      capabilities across multiple chains
                    </p>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="onestopBox lastOnestop">
                    <h3>Pool</h3>
                    <img src={OneStop5} className="OneStopImg" alt="One Stop" />
                    <p>
                      Contribute liquidity across various blockchain networks,
                      earning rewards to seize the full potential of your
                      digital assets and bolster the Emmet DeFi protocol
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OneStop;

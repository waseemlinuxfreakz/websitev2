import React, { useEffect, useState } from 'react';
import RightArrow from '../../assets/img/right-arrow.svg';
import Copy from '../../assets/img/copy.svg';
import { useAppSelector } from '../../hooks/storage';
import { isMobile } from 'react-device-detect';

function TrackExplorer() {

  const bridge = useAppSelector((state) => state.bridge);

  const [isFlipped, setIsFlipped] = useState(false);

  const showCharacters = isMobile ? 6 : 18;

  const proceedToTheExplorer = () => {
    setIsFlipped(!isFlipped);
  };

  function copyFromText () {
    console.log("TrackExplorer:copyFromText:from:", bridge.fromHash);
    navigator.clipboard.writeText(bridge.fromHash);
  }

  

  return (
    <div className="trackExplorer">
      <a href='/explorer'>
        <div className="trackExploerTitle" onClick={proceedToTheExplorer}>
          <h4>Track in explorer</h4>
          <img src={RightArrow} alt="RightArrow" className={`arrowRight ${isFlipped ? 'flipped' : ''}`} />
        </div>
      </a>

      {bridge.fromHash && (<div className="destinationHas">
        <div className="destinationHasTitle">
          <h4>Original hash</h4>
          <img
            className='btn-copy'
            src={Copy}
            alt="Copy"
            onClick={copyFromText}
          />
        </div>
        <div className="destinationHasLink" style={{ textAlign: "center" }}>
          {`${bridge.fromHash.slice(0, showCharacters)}...${bridge.fromHash.slice(-showCharacters)}`}
        </div>
      </div>)}

      {bridge.toHash && (<div className="destinationHas">
        <div className="destinationHasTitle">
          <h4>Destination hash</h4>
          <img
          className='btn-copy'
            src={Copy}
            alt="Copy"
            onClick={() => navigator.clipboard.writeText(bridge.toHash)}
          />
        </div>
        <div className="destinationHasLink" style={{ textAlign: "center" }}>
          {`${bridge.toHash.slice(0, showCharacters)}...${bridge.toHash.slice(-showCharacters)}`}
        </div>
      </div>)}


    </div>
  );
}

export default TrackExplorer;

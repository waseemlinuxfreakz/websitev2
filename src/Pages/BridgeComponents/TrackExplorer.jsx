import React, { useEffect, useState } from 'react';
import RightArrow from '../../assets/img/right-arrow.svg';
import Copy from '../../assets/img/copy.svg';
import { useAppSelector } from '../../hooks/storage';
import { isMobile } from 'react-device-detect';

function TrackExplorer() {

  const bridge = useAppSelector((state) => state.bridge);

  const [isFlipped, setIsFlipped] = useState(false);
  const [fromHash, setFromHash] = useState(bridge.fromHash);
  const [toHash, setToHash] = useState(bridge.toHash);

  const showCharacters = isMobile ? 6 : 18;

  const proceedToTheExplorer = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setFromHash(bridge.fromHash);
  }, [bridge.fromHash]);

  useEffect(() => {
    setToHash(bridge.toHash);
  }, [bridge.toHash])

  return (
    <div className="trackExplorer">
      <a href='/explorer'>
        <div className="trackExploerTitle" onClick={proceedToTheExplorer}>
          <h4>Track in explorer</h4>
          <img src={RightArrow} alt="RightArrow" className={`arrowRight ${isFlipped ? 'flipped' : ''}`} />
        </div>
      </a>

      {fromHash && (<div className="destinationHas">
        <div className="destinationHasTitle">
          <h4>Original hash</h4>
          <img
            src={Copy}
            alt="Copy"
            onClick={() => navigator.clipboard.writeText(fromHash)}
          />
        </div>
        <div className="destinationHasLink" style={{ textAlign: "center" }}>
          {`${fromHash.slice(0, showCharacters)}...${fromHash.slice(-showCharacters)}`}
        </div>
      </div>)}

      {toHash && (<div className="destinationHas">
        <div className="destinationHasTitle">
          <h4>Destination hash</h4>
          <img
            src={Copy}
            alt="Copy"
            onClick={() => navigator.clipboard.writeText(toHash)}
          />
        </div>
        <div className="destinationHasLink" style={{ textAlign: "center" }}>
          {`${toHash.slice(0, showCharacters)}...${toHash.slice(-showCharacters)}`}
        </div>
      </div>)}


    </div>
  );
}

export default TrackExplorer;

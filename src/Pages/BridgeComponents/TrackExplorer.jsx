import React, { useState } from 'react';
import RightArrow from '../../assets/img/right-arrow.svg';
import Copy from '../../assets/img/copy.svg';

function TrackExplorer() {
  const [isDestinationVisible, setDestinationVisible] = useState(false);

  const toggleDestinationVisibility = () => {
    setDestinationVisible(!isDestinationVisible);
  };

  return (
    <div className="trackExplorer">
      <div className="trackExploerTitle" onClick={toggleDestinationVisibility}>
        <h4>Track in explorer</h4>
        <img src={RightArrow} alt="RightArrow" className={`arrowRight ${isDestinationVisible ? 'flipped' : ''}`} />
      </div>
      {isDestinationVisible && (
        <div className="destinationHas">
          <div className="destinationHasTitle">
            <h4>Destination hash</h4>
            <img src={Copy} alt="Copy" />
          </div>
          <div className="destinationHasLink">
            0x9a1075db55d416d3ca199f5580e9d95...d48d
          </div>
        </div>
      )}
    </div>
  );
}

export default TrackExplorer;

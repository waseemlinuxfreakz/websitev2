import React from 'react';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

import RightArrow from '../../../assets/img/right-arrow.svg';
import Copy from '../../../assets/img/copy.svg';

import { useAppSelector, useAppDispatch } from '../../../hooks/storage';
import { resetBridgeProgress } from '../../../store/bridgeSlice';


function TrackExplorer() {

  const dispatch = useAppDispatch();
  const bridge = useAppSelector((state) => state.bridge);
  const tx = useAppSelector((state) => state.explorer.bridgeTransaction);

  const showCharacters = isMobile ? 6 : 18;

  function clearBridgeProgress() {
    dispatch(resetBridgeProgress());
  }

  return (
    <div className="trackExplorer">
      {tx
        && tx.bridgeHash
        && (<div className="trackExploerTitle">
          <h4>
            <Link
              to={`/transactionDetails/${tx.bridgeHash}`}
              onClick={clearBridgeProgress}
            >
              {`TX ${tx.bridgeHash} details`}
            </Link>
          </h4>
          <img src={RightArrow} alt="RightArrow" className={`arrowRight`} />
        </div>)
      }


      {bridge.fromHash && (<div className="destinationHas">
        <div className="destinationHasTitle">
          <h4>Original hash</h4>
          <img
            className='btn-copy'
            src={Copy}
            alt="Copy"
            onClick={() => navigator.clipboard.writeText(bridge.fromHash)}
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

import React from 'react';
import PoolTableTop from './PoolTableTop';
import PoolTable from './PooltableData';
import PoolMobileData from './PoolMobileData';
import useMobileDetector from '../../../hooks/useMobileDetector';

function PoolTableArea() {
  
  const isMobile = useMobileDetector();

  return (
    <div className="poolTableArea">
      <PoolTableTop />
      {isMobile ? <PoolMobileData /> : <PoolTable />}
    </div>
  );
}

export default PoolTableArea;

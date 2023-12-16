import React, { useState, useEffect } from 'react';
import PoolTableTop from './PoolTableTop';
import PoolTable from './PooltableData';
import PoolMobileData from './PoolMobileData';

function PoolTableArea() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust the threshold based on your design needs
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="poolTableArea">
      <PoolTableTop />
      {isMobile ? <PoolMobileData /> : <PoolTable />}
    </div>
  );
}

export default PoolTableArea;

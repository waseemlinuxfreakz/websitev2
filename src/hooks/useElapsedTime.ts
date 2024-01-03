import { useState, useEffect } from 'react';

export default function useElapsedTime (startTime: string) {
  const [elapsedTime, setElapsedTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateElapsedTime = () => {
      const startDate = new Date(startTime).getTime();
      const endDate = new Date().getTime();
      const timeDifference = endDate - startDate;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setElapsedTime({ days, hours, minutes, seconds });
    };

    // Update elapsed time every second
    const intervalId = setInterval(calculateElapsedTime, 1000);

    return () => clearInterval(intervalId);
  }, [startTime]);

  return elapsedTime;
};
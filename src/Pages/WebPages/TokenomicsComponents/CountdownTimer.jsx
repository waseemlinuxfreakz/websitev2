import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      // Timer has expired
      setTimerExpired(true);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [targetDate]);

  if (timerExpired) {
    return <div>Timer Expired!</div>;
  }

  return (
    <div>
      <div>{timeRemaining.days}d</div>
      <div>{timeRemaining.hours}h</div>
      <div>{timeRemaining.minutes}m</div>
      <div>{timeRemaining.seconds}s</div>
    </div>
  );
};

export default CountdownTimer;

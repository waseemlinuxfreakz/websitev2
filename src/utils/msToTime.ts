export function msToTime(duration: number) {
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);

  // const minutes = _minutes < 10 ? "0" + _minutes : _minutes;
  // const seconds = _seconds < 10 ? "0" + _seconds : _seconds;

  if (minutes && seconds) {
    return `${minutes} mins ${seconds} secs`;
  } else if (minutes) {
    return `${minutes} mins`;
  }
  return seconds + " secs";
}

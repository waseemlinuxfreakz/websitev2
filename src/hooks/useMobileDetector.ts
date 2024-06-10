import { useState, useEffect } from "react";

export default function useMobileDetector() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Attach the event listener when the component using the hook mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component using the hook unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once during mount/unmount

  return isMobile;
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const gaTrackingId = "G-C8Z7ZSWB1L"; // Replace with your Tracking ID

export function useAnalytics() {
  let location = useLocation();
  useEffect(() => {
    ReactGA.initialize(gaTrackingId);
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

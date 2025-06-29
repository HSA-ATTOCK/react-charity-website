import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  }, [pathname]); // Triggers when the pathname changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;

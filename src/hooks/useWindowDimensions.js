import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

// Pixel widths used to determine responsive layouts
export const BSBreakpoints = {
  xs: 0,
  bp400: 400,
  bp470: 470,
  sm: 576,
  bp675: 675,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

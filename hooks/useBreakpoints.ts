import { useMediaQuery } from "react-responsive";

export const useBreakpoint = () => {
  const sm = useMediaQuery({
    query: "(min-width: 640px)",
  });
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  const lg = useMediaQuery({ query: "(min-width: 1024px)" });
  const xl = useMediaQuery({ query: "(min-width: 1280px)" });
  const xxl = useMediaQuery({ query: "(min-width: 1536px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isLandscape = useMediaQuery({ query: "(orientation: landscape)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1280px)" });
  const isWidescreen = useMediaQuery({ query: "(min-width: 1536px)" });
  const isTouchDevice = useMediaQuery({ query: "(hover: none)" });
  return {
    base: !sm && !md && !lg && !xl && !xxl,
    sm,
    md,
    lg,
    xl,
    xxl,
    isPortrait,
    isLandscape,
    isRetina,
    isMobile,
    isTablet,
    isDesktop,
    isBigScreen,
    isWidescreen,
    isTouchDevice,
  };
};

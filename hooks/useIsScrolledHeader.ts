import { useCallback, useState } from "react";
import { useEventListener } from "./useEventListener";

export const useIsScrolledHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handler = useCallback(
    ({
      target: {
        scrollingElement: { scrollTop },
      },
    }) => {
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    },
    []
  );
  useEventListener("scroll", handler);
  return isScrolled;
};

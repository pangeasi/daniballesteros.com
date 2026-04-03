import { useCallback, useState } from "react";
import { useEventListener } from "./useEventListener";

export const useIsScrolledHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handler = useCallback((event: Event) => {
    const target = event.target as Document | null;
    const scrollTop = target?.scrollingElement?.scrollTop ?? window.scrollY ?? 0;

    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEventListener("scroll", handler);
  return isScrolled;
};

import { useEffect, useRef } from "react";

type EventTargetLike = Pick<
  Window,
  "addEventListener" | "removeEventListener"
>;

export const useEventListener = (
  eventName: string,
  handler: (event: Event) => void,
  element?: EventTargetLike | null
) => {
  const savedHandler = useRef<(event: Event) => void>(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const target = element ?? (typeof window !== "undefined" ? window : null);
    const isSupported = target && target.addEventListener;

    if (!isSupported) return;

    const eventListener = (event: Event) => savedHandler.current(event);

    target.addEventListener(eventName, eventListener);

    return () => {
      target.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

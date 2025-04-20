import { useEffect, useRef } from "react";

type Props = {
  onClickOutside: () => void;
  enabled?: boolean;
};
export const useOutsideClick = <T extends HTMLElement>({
  onClickOutside,
  enabled = true,
}: Props) => {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!enabled) return;
    const handleClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClick);

    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [enabled, onClickOutside]);

  return ref;
};

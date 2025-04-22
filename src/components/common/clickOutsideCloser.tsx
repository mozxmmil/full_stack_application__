import React, { useState } from "react";
import { useOutsideClick } from "@/hook/useOutsideClick";

type Props = {
  children: React.ReactNode;
  callBack?: (arg: boolean) => void;
};
const ClickoutsideCloser = ({ children, callBack }: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useOutsideClick<HTMLDivElement>({
    onClickOutside: () => {
      setIsVisible(false);
      callBack!(isVisible);
    },
    enabled: isVisible,
  });
  if (!isVisible) return null;
  return <div ref={ref}>{children}</div>;
};

export default ClickoutsideCloser;

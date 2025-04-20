import React, { useState } from "react";
import { useOutsideClick } from "@/hook/useOutsideClick";

type Props = {
  children: React.ReactNode;
};
const ClickoutsideCloser = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useOutsideClick<HTMLDivElement>({
    onClickOutside: () => setIsVisible(false),
    enabled: isVisible,
  });
  if (!isVisible) return null;
  return <div ref={ref}>{children}</div>;
};

export default ClickoutsideCloser;

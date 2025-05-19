import React, { HTMLAttributes, useState } from "react";
import { useOutsideClick } from "@/hook/useOutsideClick";
import { cn } from "@/utils/cn";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  callBack?: (arg: boolean) => void;
};
const ClickoutsideCloser = ({ children, callBack, className }: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useOutsideClick<HTMLDivElement>({
    onClickOutside: () => {
      setIsVisible(!isVisible);
      callBack!(isVisible);
    },
    enabled: isVisible,
  });
  if (!isVisible) return null;
  return (
    <div className={cn(className)} ref={ref}>
      {children}
    </div>
  );
};

export default ClickoutsideCloser;

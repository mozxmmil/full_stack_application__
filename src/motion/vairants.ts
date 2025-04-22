import { Variants } from "motion/react";

export const iconXVariants: Variants = {
  hover: {
    transform: "rotate(180deg",
    scale:1.2,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
    color: "#e31448",
  },
};

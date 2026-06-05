import { Variants } from "framer-motion";

export const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      mass: 0.8,
    },
  },
};

export const megaMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1], // easeIn
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0, 0, 0.2, 1], // easeOut
    },
  },
};

export const searchPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 28,
    },
  },
  backdropHidden: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
  backdropVisible: {
    opacity: 1,
    backdropFilter: "blur(12px)",
  },
};

export const mobileDrawerVariants: Variants = {
  hidden: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 380,
      damping: 40,
    },
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 32,
    },
  },
  backdropHidden: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: { duration: 0.2 },
  },
  backdropVisible: {
    opacity: 1,
    backdropFilter: "blur(4px)",
    transition: { duration: 0.3 },
  },
};

export const badgeVariants: Variants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.25, 0.95, 1.1, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const itemHoverVariants: Variants = {
  hover: {
    y: -2,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export const iconHoverVariants: Variants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { type: "spring", stiffness: 400, damping: 12 },
  },
};

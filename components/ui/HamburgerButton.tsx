import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../theme";

export const HamburgerButton = ({ onClick, isActive }) => {
  const { colors } = useTheme();

  const divStyles = {
    height: 3,
    backgroundColor: colors.JUGNLE_GREEN,
  };

  return (
    <button
      onClick={onClick}
      css={{
        outline: "none",
        zIndex: 500,
        width: 30,
        height: 20,
        padding: 0,
        border: "none",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        cursor: "pointer",
      }}
    >
      <motion.div
        animate={isActive ? { rotate: 45 } : { rotate: 0 }}
        style={{ ...divStyles, transformOrigin: 0 }}
      />
      <motion.div
        animate={
          isActive ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
        }
        style={divStyles}
      />
      <motion.div
        animate={isActive ? { rotate: -45 } : { rotate: 0 }}
        style={{ ...divStyles, transformOrigin: "5px 4px" }}
      />
    </button>
  );
};

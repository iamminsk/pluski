import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { useTheme } from "../../theme";

export const HamburgerButton = ({ onClick, isActive, ...rest }) => {
  const { colors } = useTheme();

  const divStyles = {
    height: 3,
    backgroundColor: colors.JUGNLE_GREEN,
  };

  return (
    <AnimateSharedLayout>
      <motion.button
        onClick={onClick}
        layoutId="hamburgerMenu"
        css={[
          {
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
          },
          isActive && { position: "fixed", right: 20, top: 45 },
        ]}
        {...rest}
      >
        <motion.div
          animate={{ rotate: isActive ? 45 : 0 }}
          style={{ ...divStyles, transformOrigin: 0 }}
        />
        <motion.div
          animate={{ opacity: isActive ? 0 : 1, scaleX: isActive ? 0 : 1 }}
          style={divStyles}
        />
        <motion.div
          animate={{ rotate: isActive ? -45 : 0 }}
          style={{ ...divStyles, transformOrigin: "5px 4px" }}
        />
      </motion.button>
    </AnimateSharedLayout>
  );
};

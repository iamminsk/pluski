import { useTheme } from "../../theme";
import { motion } from "framer-motion";

export const Loader = () => {
  const { colors } = useTheme();
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };

  const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut",
  };

  const loadingContainer = {
    width: "12rem",
    height: "12rem",
    display: "flex",
    justifyContent: "space-around",
  };

  const loadingCircle = {
    display: "block",
    width: "2.5rem",
    height: "2.5rem",
    backgroundColor: colors.JUGNLE_GREEN,
    borderRadius: "50%",
  };

  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
};

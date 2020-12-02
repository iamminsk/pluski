import { motion } from "framer-motion";
import { useTheme } from "../../theme";
import { BlockWrapper } from "../ui/BlockWrapper";

export const Footer = () => {
  const { colors } = useTheme();
  return (
    <BlockWrapper
      as="footer"
      wrapperCss={{
        backgroundColor: colors.ASH_GRAY,
      }}
    >
      <p css={{ color: colors.WASHED_WHITE }}>
        💪 by{" "}
        <motion.a
          href="https://www.linkedin.com/in/adjakubowski/"
          target="_blank"
          whileHover={{ backgroundColor: colors.JUGNLE_GREEN }}
          css={{ color: colors.WASHED_WHITE }}
        >
          ian miński
        </motion.a>
      </p>
    </BlockWrapper>
  );
};

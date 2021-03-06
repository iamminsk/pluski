import { motion } from "framer-motion";
import { useTheme } from "../../theme";
import { BlockWrapper } from "../ui/BlockWrapper";

export const Footer = () => {
  const { colors, bp } = useTheme();
  return (
    <BlockWrapper
      as="footer"
      wrapperCss={{
        backgroundColor: colors.ASH_GRAY,
        color: colors.WASHED_WHITE,
        position: "relative",
      }}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          [bp.ONLY_MOBILE]: {
            height: 50,
          },
        }}
      >
        <p css={{ fontSize: 14 }}>
          💪 by{" "}
          <motion.a
            href="https://www.linkedin.com/in/adjakubowski/"
            target="_blank"
            whileHover={{ backgroundColor: colors.JUGNLE_GREEN }}
          >
            ian miński
          </motion.a>
        </p>
      </div>
      <div
        css={{
          position: "fixed",
          left: 0,
          right: 0,
          height: 50,
          border: "1px solid red",
        }}
      />
    </BlockWrapper>
  );
};

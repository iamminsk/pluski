import { Interpolation, Theme } from "@emotion/react";
import { motion } from "framer-motion";
import { useTheme } from "../../theme";

interface ContactBoxProps {
  title: string;
  href: string;
  anchorText: string;
  isBlank?: boolean;
  wrapperCss?: Interpolation<Theme>;
}

export const ContactBox = ({
  title,
  href,
  anchorText,
  isBlank,
  wrapperCss,
}: ContactBoxProps) => {
  const { colors } = useTheme();
  return (
    <div css={wrapperCss}>
      <span css={{ display: "block", fontSize: 20 }}>{title}</span>
      <motion.a
        href={href}
        target={isBlank ? "_blank" : undefined}
        css={{
          fontSize: 25,
          color: colors.ASH_GRAY,
          lineHeight: "30px",
        }}
        whileHover={{
          backgroundColor: colors.JUGNLE_GREEN,
          color: colors.WASHED_WHITE,
        }}
        dangerouslySetInnerHTML={{ __html: anchorText }}
      />
    </div>
  );
};

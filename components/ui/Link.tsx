import { motion } from "framer-motion";
import { Color, useTheme } from "../../theme";

interface LinkProps {
  href: string;
  color?: Color;
  hoverColor?: Color;
  backgroundColor?: Color;
  isBlank?: boolean;
  withUnderline?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  color = "WASHED_WHITE",
  hoverColor = "WASHED_WHITE",
  backgroundColor = "ASH_GRAY",
  isBlank = true,
  withUnderline = true,
  children,
}) => {
  const { colors } = useTheme();
  return (
    <motion.a
      href={href}
      target={isBlank ? "_blank" : undefined}
      whileHover={{
        backgroundColor: colors[backgroundColor],
        color: colors[hoverColor],
        textDecoration: "none",
      }}
      css={{
        color: colors[color],
        textDecoration: withUnderline ? "underline" : undefined,
      }}
    >
      {children}
    </motion.a>
  );
};

import { motion } from "framer-motion";
import { useTheme } from "../../theme";

interface Props {
  label: string;
  anchorId: string;
  isNavigationHovered: boolean;
}

export const NavigationItem: React.FC<Props> = ({
  label,
  anchorId,
  isNavigationHovered,
}) => {
  const { colors } = useTheme();
  return (
    <li>
      <motion.a
        animate={{ opacity: isNavigationHovered ? 0.5 : 1 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        href={`#${anchorId}`}
        css={{
          fontSize: 32,
          padding: "5px 0",
          display: "inline-block",
          color: colors.ASH_GRAY,
        }}
      >
        {label}
      </motion.a>
    </li>
  );
};

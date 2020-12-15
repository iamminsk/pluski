import { motion } from "framer-motion";
import { useCallback } from "react";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import { useTheme } from "../../theme";

interface Props {
  label: string;
  anchorId: string;
  isNavigationHovered: boolean;
  onClick: () => void;
}

export const NavigationItem: React.FC<Props> = ({
  label,
  anchorId,
  isNavigationHovered,
  onClick,
}) => {
  const { colors } = useTheme();

  const onItemClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
    const node = document.getElementById(anchorId)!;

    scrollIntoView(node, {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, []);

  return (
    <li>
      <motion.a
        animate={{ opacity: isNavigationHovered ? 0.5 : 1 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        href={`#${anchorId}`}
        onClick={onItemClick}
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

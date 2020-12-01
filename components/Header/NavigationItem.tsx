import { motion } from "framer-motion";

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
        }}
      >
        {label}
      </motion.a>
    </li>
  );
};

import { motion } from "framer-motion";

export const NavigationItem = ({ label, anchorId, isNavigationHovered }) => {
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

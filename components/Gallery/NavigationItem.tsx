import { useCallback, useRef } from "react";
import { motion } from "framer-motion";

import scrollIntoView from "smooth-scroll-into-view-if-needed";
import { useTheme } from "../../theme";

export const NavigationItem = ({
  isActive,
  id,
}: {
  isActive: boolean;
  id: string;
}) => {
  const { colors } = useTheme();

  const onClick = useCallback(() => {
    const element = document.querySelector(`#${id}`);

    if (element) {
      scrollIntoView(element, {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, []);

  return (
    <motion.div
      role="button"
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      css={{
        height: 10,
        width: 10,
        borderRadius: "50%",
        margin: "0 30px",
        flexShrink: 0,
        backgroundColor: colors.ASH_GRAY,
        cursor: "pointer",
      }}
    >
      {isActive && (
        <motion.div
          layoutId="outline"
          css={{
            height: 10,
            width: 10,
            borderRadius: "50%",
            backgroundColor: colors.JUGNLE_GREEN,
          }}
        />
      )}
    </motion.div>
  );
};

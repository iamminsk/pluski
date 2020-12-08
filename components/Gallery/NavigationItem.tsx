import { motion } from "framer-motion";
import { useTheme } from "../../theme";

export const NavigationItem = ({ isActive }: { isActive: boolean }) => {
  const { colors } = useTheme();

  return (
    <div
      css={{
        height: 10,
        width: 10,
        borderRadius: "50%",
        margin: "0 30px",
        backgroundColor: colors.ASH_GRAY,
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
    </div>
  );
};

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import { useTheme } from "../../theme";
import { NavigationItem } from "./NavigationItem";

interface NavigationProps {
  isOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isOpen,
  setIsNavOpen,
}) => {
  const { colors, bp, zIndexes } = useTheme();
  const [isNavigationHovered, setIsNavigationHovered] = useState(false);
  const ref = useRef(null);

  const clickListener = useCallback(
    (event) => {
      // FIXME
      // @ts-ignore
      if (ref && !ref.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    },
    [ref.current]
  );

  useEffect(() => {
    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, []);

  return (
    <RemoveScroll enabled={isOpen}>
      <motion.nav
        ref={ref}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "tween", duration: 0.5 }}
        css={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          right: 0,
          top: 0,
          backgroundColor: colors.WASHED_WHITE,
          paddingLeft: 50,
          overflow: "scroll",
          display: "flex",
          alignItems: "center",
          zIndex: zIndexes.LAYER_1,
          [bp.FROM_DESKTOP]: {
            width: "350px",
          },
        }}
      >
        <motion.div
          animate={{ width: isOpen ? 20 : 0 }}
          transition={{
            type: "spring",
            bounce: 0,
            duration: 0.5,
            delay: 0.4,
          }}
          css={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            backgroundColor: colors.JUGNLE_GREEN,
          }}
        />
        <motion.ul
          onHoverStart={() => {
            setIsNavigationHovered(true);
          }}
          onHoverEnd={() => {
            setIsNavigationHovered(false);
          }}
        >
          {navigationAnchors.map((anchor) => (
            <NavigationItem
              label={anchor.label}
              anchorId={anchor.id}
              isNavigationHovered={isNavigationHovered}
            />
          ))}
        </motion.ul>
      </motion.nav>
    </RemoveScroll>
  );
};

const navigationAnchors = [
  {
    id: "cabin",
    label: "dom",
  },
  {
    id: "lake",
    label: "jezioro",
  },
  {
    id: "place",
    label: "miejscowość",
  },
  {
    id: "surroundings",
    label: "w okolicy",
  },
  {
    id: "reservation",
    label: "rezerwacja",
  },
  {
    id: "howtoget",
    label: "jak do nas dotrzeć",
  },
];

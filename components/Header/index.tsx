import { AnimatePresence } from "framer-motion";

import { BlockWrapper } from "../ui/BlockWrapper";
import { HamburgerButton } from "../ui/HamburgerButton";
import { Navigation } from "./Navigation";

export const Header = ({
  navState,
}: {
  navState: [boolean, (isOpen: boolean) => void];
}) => {
  const [isNavOpen, setIsNavOpen] = navState;

  return (
    <BlockWrapper
      as="header"
      wrapperCss={{ padding: "30px 0", position: "relative" }}
    >
      <AnimatePresence>
        {isNavOpen && (
          <Navigation isOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        )}
      </AnimatePresence>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img alt="logo" src="/imgs/logo.svg" />
        <HamburgerButton
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
          isActive={isNavOpen}
        />
      </div>
    </BlockWrapper>
  );
};

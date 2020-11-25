import { useState } from "react";
import { motion } from "framer-motion";

import { useTheme } from "../../theme";

import { BlockWrapper } from "../ui/BlockWrapper";
import { HamburgerButton } from "../ui/HamburgerButton";
import { Navigation } from "./Navigation";

export const Header = ({ navState }) => {
  const [isNavOpen, setIsNavOpen] = navState;

  return (
    <BlockWrapper as="header" wrapperCss={{ paddingTop: 30 }}>
      <Navigation isOpen={isNavOpen} />
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <svg width="169px" height="48px" viewBox="0 0 169 48" version="1.1">
          <title>logo</title>
          <g
            id="Lodge"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Desktop-HD" transform="translate(-52.000000, -51.000000)">
              <g id="logo" transform="translate(52.000000, 51.000000)">
                <rect
                  id="Rectangle"
                  fill="#35605A"
                  x="0"
                  y="0"
                  width="169"
                  height="48"
                ></rect>
                <text
                  id="dom-letniskowy"
                  font-family="GillSans-Light, Gill Sans"
                  font-size="20"
                  font-weight="300"
                  line-spacing="19"
                  fill="#E0E0E2"
                >
                  <tspan x="8" y="22">
                    dom{" "}
                  </tspan>
                  <tspan x="8" y="41">
                    letniskowy
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </svg>
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

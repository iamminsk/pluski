import { useCallback, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import scrollIntoView from "smooth-scroll-into-view-if-needed";

import { BlockWrapper } from "../ui/BlockWrapper";
import { useTheme } from "../../theme";
import { Image } from "./Image";
import { NavigationItem } from "./NavigationItem";

export const Gallery = () => {
  const { colors } = useTheme();
  const [visibleImageIndex, setVisibleImageIndex] = useState(0);

  const onClick = useCallback(
    (direction) => {
      let element;
      if (direction === "next") {
        element = document.querySelector<HTMLElement>(
          `#${images[visibleImageIndex].id}`
        )?.nextElementSibling;
      }

      if (direction === "previous") {
        element = document.querySelector<HTMLElement>(
          `#${images[visibleImageIndex].id}`
        )?.previousElementSibling;
      }

      if (element) {
        scrollIntoView(element, {
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    },
    [visibleImageIndex]
  );

  return (
    <section
      css={{
        overflow: "hidden",
        padding: "40px 0",
      }}
    >
      <BlockWrapper as="div">
        <h2 css={{ color: colors.JUGNLE_GREEN, marginBottom: 20 }}>Galeria</h2>
      </BlockWrapper>
      <div css={{ position: "relative" }}>
        <div
          css={{
            width: "100vw",
            display: "inline-flex",
            overflow: "auto",
            alignItems: "center",
          }}
        >
          {images.map((image, index) => (
            <Image
              image={image}
              index={index}
              setVisibleImageIndex={setVisibleImageIndex}
            />
          ))}
          {visibleImageIndex + 1 < images.length && (
            <div
              role="button"
              onClick={() => onClick("next")}
              css={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                src="/imgs/caret-right.svg"
                css={{ width: 120, height: 120 }}
              />
            </div>
          )}
          {visibleImageIndex !== 0 && (
            <div
              role="button"
              onClick={() => onClick("previous")}
              css={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                css={{ width: 120, height: 120 }}
                src="/imgs/caret-left.svg"
              />
            </div>
          )}
        </div>
      </div>

      <BlockWrapper as="div">
        <div css={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          <AnimateSharedLayout>
            {images.map((image, index) => (
              <NavigationItem
                isActive={index === visibleImageIndex}
                id={image.id}
              />
            ))}
          </AnimateSharedLayout>
        </div>
      </BlockWrapper>
    </section>
  );
};

const images = [
  {
    id: "a",
    alt: "",
    src:
      "https://images.unsplash.com/photo-1607346705566-b2b5048ae44a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
  },
  {
    id: "b",
    alt: "",
    src:
      "https://images.unsplash.com/photo-1607012264151-74cccba744a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3089&q=80",
  },
  {
    id: "c",
    alt: "",
    src:
      "https://images.unsplash.com/photo-1607038523484-203fe00e2465?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3000&q=80",
  },
  {
    id: "d",
    alt: "",
    src:
      "https://images.unsplash.com/photo-1607256822420-c4fc9e6e08ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80",
  },
  {
    id: "e",
    alt: "",
    src:
      "https://images.unsplash.com/photo-1607262797918-e290e207786e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2767&q=80",
  },
];

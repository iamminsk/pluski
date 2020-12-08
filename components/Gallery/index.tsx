import { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";

import { BlockWrapper } from "../ui/BlockWrapper";
import { useTheme } from "../../theme";
import { Image } from "./Image";
import { NavigationItem } from "./NavigationItem";

export const Gallery = () => {
  const { colors } = useTheme();
  const [visibleImageId, setVisibleImageId] = useState(images[0].id);

  return (
    <section css={{ overflow: "hidden", padding: "40px 0" }}>
      <BlockWrapper as="div">
        <h2 css={{ color: colors.JUGNLE_GREEN, marginBottom: 20 }}>Galeria</h2>
      </BlockWrapper>
      <div
        css={{
          width: "100vw",
          display: "inline-flex",
          overflow: "auto",
          alignItems: "center",
        }}
      >
        {images.map((image) => (
          <Image image={image} setVisibleImageId={setVisibleImageId} />
        ))}
      </div>
      <BlockWrapper as="div">
        <div css={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          <AnimateSharedLayout>
            {images.map((image) => (
              <NavigationItem isActive={image.id === visibleImageId} />
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

import { useEffect } from "react";
import { default as NextImage } from "next/image";
import { useInView } from "react-intersection-observer";

import { useTheme } from "../../theme";

interface ImageProps {
  setVisibleImageIndex: (index: number) => void;
  index: number;
  image: {
    id: string;
    alt: string;
    src: string;
  };
}

export const Image = ({ setVisibleImageIndex, index, image }: ImageProps) => {
  const [ref, inView] = useInView({ threshold: 0.8 });
  const { bp } = useTheme();

  useEffect(() => {
    if (inView) {
      setVisibleImageIndex(index);
    }
  }, [inView]);

  return (
    <div
      id={image.id}
      ref={ref}
      css={{
        flexShrink: 0,
        flexBasis: "90vw",
        marginRight: 20,
        height: 300,
        position: "relative",
        [bp.FROM_TABLET]: {
          height: 900,
          maxHeight: "70vh",
        },
      }}
    >
      <NextImage
        layout="fill"
        key={image.id}
        src={image.src}
        alt={image.alt}
        objectFit="cover"
      />
    </div>
  );
};

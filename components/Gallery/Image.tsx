import { useEffect } from "react";
import { default as NextImage } from "next/image";
import { useInView } from "react-intersection-observer";

interface ImageProps {
  setVisibleImageId: (imageId: string) => void;
  image: {
    id: string;
    alt: string;
    src: string;
  };
}

export const Image = ({ setVisibleImageId, image }: ImageProps) => {
  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView) {
      setVisibleImageId(image.id);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      css={{
        flexShrink: 0,
        flexBasis: "90vw",
        marginRight: 20,
        height: 300,
        position: "relative",
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

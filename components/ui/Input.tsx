import { Interpolation, Theme } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef } from "react";
import { useTheme } from "../../theme";

export const Input = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"] & {
    label: string;
    errorMessage?: string;
    wrapperCss?: Interpolation<Theme>;
  }
>(({ label, name, wrapperCss, errorMessage, ...props }, ref) => {
  const { colors, zIndexes } = useTheme();

  return (
    <label
      css={[
        { fontSize: 20, display: "block", position: "relative" },
        wrapperCss,
      ]}
    >
      {label}
      <input
        ref={ref}
        name={name}
        css={{
          display: "block",
          height: 50,
          width: "100%",
          border: `2px solid ${
            errorMessage ? colors.BRICK_RED : colors.JUGNLE_GREEN
          }`,
          backgroundColor: "transparent",
          padding: 15,
          fontSize: 16,
          marginTop: 5,
          borderRadius: 0,
          WebkitAppearance: "none",
          MozAppearance: "none",
          appearance: "none",
          transition: "border-color .1s",
          "::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
        }}
        {...props}
      />
      <AnimatePresence>
        {errorMessage && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            css={{
              position: "absolute",
              right: 0,
              bottom: 50,
              backgroundColor: colors.BRICK_RED,
              color: colors.WASHED_WHITE,
              padding: "0px 10px",
              fontSize: 16,
            }}
          >
            {errorMessage}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
});

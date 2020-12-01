import { Interpolation, Theme } from "@emotion/react";
import { forwardRef } from "react";
import { useTheme } from "../../theme";

export const Input = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"] & {
    label: string;
    wrapperCss?: Interpolation<Theme>;
  }
>(({ label, name, wrapperCss, ...props }, ref) => {
  const { colors } = useTheme();

  return (
    <label css={[{ fontSize: 20, display: "block" }, wrapperCss]}>
      {label}
      <input
        ref={ref}
        name={name}
        css={{
          display: "block",
          height: 50,
          width: "100%",
          border: `2px solid ${colors.JUGNLE_GREEN}`,
          backgroundColor: "transparent",
          padding: 15,
          fontSize: 16,
          marginTop: 5,
          borderRadius: 0,
          WebkitAppearance: "none",
          MozAppearance: "none",
          appearance: "none",
          "::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
        }}
        {...props}
      />
    </label>
  );
});

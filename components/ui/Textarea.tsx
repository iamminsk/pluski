import { forwardRef } from "react";
import { useTheme } from "../../theme";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  JSX.IntrinsicElements["textarea"] & { label: string }
>(({ label, name, ...props }, ref) => {
  const { colors } = useTheme();

  return (
    <label css={{ fontSize: 20 }}>
      {label}
      <textarea
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
        }}
        {...props}
      />
    </label>
  );
});

import { Interpolation, Theme } from "@emotion/react";
import { useTheme } from "../../theme";

export const ListItem: React.FC<{ wrapperCss?: Interpolation<Theme> }> = ({
  wrapperCss,
  children,
}) => {
  const { colors } = useTheme();
  return (
    <li css={[{ display: "flex", alignItems: "center" }, wrapperCss]}>
      <div
        css={{
          width: 5,
          height: 5,
          backgroundColor: colors.WASHED_WHITE,
          marginRight: 10,
          flexShrink: 0,
        }}
      />
      <span css={{ fontSize: 18 }}>{children}</span>
    </li>
  );
};

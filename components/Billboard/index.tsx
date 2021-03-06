import { useTheme } from "../../theme";
import { BlockWrapper } from "../ui/BlockWrapper";

export const Billboard = () => {
  const { colors, bp } = useTheme();

  return (
    <BlockWrapper
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "60vh",
        color: colors.JUGNLE_GREEN,
      }}
      wrapperCss={{ padding: "30px 0" }}
    >
      <h1
        css={{
          marginBottom: 15,
          [bp.FROM_TABLET]: {
            fontSize: 80,
            lineHeight: "85px",
          },
        }}
      >
        dom letniskowy
        <br /> nad jeziorem Plusznym
      </h1>
      <p css={{ fontSize: 22, lineHeight: "28px" }}>
        Komfortowy wypoczynek o każdej porze roku
      </p>
    </BlockWrapper>
  );
};

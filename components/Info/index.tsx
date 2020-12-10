import { BlockWrapper } from "../ui/BlockWrapper";
import { useTheme } from "../../theme";

export const Info = () => {
  const { colors, bp } = useTheme();

  return (
    <BlockWrapper
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [bp.FROM_TABLET]: {
          flexDirection: "row",
          justifyContent: "space-around",
        },
      }}
      wrapperCss={{
        padding: "50px 0",
        backgroundColor: colors.JUGNLE_GREEN,
      }}
    >
      <p
        css={{
          color: colors.WASHED_WHITE,
          marginBottom: 30,
          textAlign: "center",
          fontSize: 18,
          [bp.FROM_TABLET]: {
            flexBasis: "40%",
            marginBottom: 0,
            fontSize: 20,
            lineHeight: "30px",
          },
        }}
      >
        Zapraszamy do wypoczynku w miejscowości Pluski na Mazurach, w
        całorocznym, drewnianym domu letniskowym.
      </p>
      <p
        css={{
          color: colors.WASHED_WHITE,
          textAlign: "center",
          fontSize: 18,
          [bp.FROM_TABLET]: {
            flexBasis: "40%",
            fontSize: 20,
            lineHeight: "30px",
          },
        }}
      >
        Dom został oddany do użytku w maju 2010 roku. Został wykonany z
        naturalnego, ekologicznego materiału budowlanego pozwalającego na
        wypoczynek w domu wypełnionym wonią lasu.
      </p>
    </BlockWrapper>
  );
};

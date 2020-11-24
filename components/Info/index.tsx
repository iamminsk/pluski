import { BlockWrapper } from "../ui/BlockWrapper";
import { useTheme } from "../../theme";

export const Info = () => {
  const { colors } = useTheme();

  return (
    <BlockWrapper
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "60vh",
      }}
      wrapperCss={{
        padding: "30px 0",
        backgroundColor: colors.JUGNLE_GREEN,
      }}
    >
      <p
        css={{
          color: colors.WASHED_WHITE,
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        Zapraszamy do wypoczynku w miejscowości Pluski na Mazurach, w
        całorocznym, drewnianym domu letniskowym.
      </p>
      <p css={{ color: colors.WASHED_WHITE, textAlign: "center" }}>
        Dom został oddany do użytku w maju 2010 roku. Został wykonany z
        naturalnego, ekologicznego materiału budowlanego pozwalającego na
        wypoczynek w domu wypełnionym wonią lasu.
      </p>
    </BlockWrapper>
  );
};

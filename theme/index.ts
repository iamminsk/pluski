const screenSizes = {
  TABLET: 992,
  DESKTOP: 1200,
};

const bp = {
  FROM_TABLET: `@media (min-width: ${screenSizes.TABLET}px)`,
  FROM_DESKTOP: `@media (min-width: ${screenSizes.DESKTOP}px)`,
  ONLY_MOBILE: `@media (min-width: 0px) and (max-width:${screenSizes.TABLET}px)`,
};

const colors = {
  JUGNLE_GREEN: "rgb(53, 96, 90)",
  WASHED_WHITE: "rgb(245, 245, 245)",
  ASH_GRAY: "rgb(74, 74, 74)",
  SKY_BLUE: "rgb(74, 144, 226)",
};

const zIndexes = {
  LAYER_1: 100,
};

export const useTheme = () => ({
  bp,
  screenSizes,
  colors,
  zIndexes,
});

export type Color = keyof typeof colors;

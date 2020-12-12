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
  JUGNLE_GREEN: "#35605a",
  WASHED_WHITE: "#f5f5f5",
  ASH_GRAY: "#4a4a4a",
  SKY_BLUE: "#4a90e2",
  BRICK_RED: "#a31621",
};

const zIndexes = {
  LAYER_1: 100,
  LAYER_2: 200,
  LAYER_3: 300,
};

export const useTheme = () => ({
  bp,
  screenSizes,
  colors,
  zIndexes,
});

export type Color = keyof typeof colors;

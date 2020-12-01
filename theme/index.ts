const screenSizes = {
  TABLET: 992,
  DESKTOP: 1200,
};

const bp = {
  FROM_TABLET: `@media (min-width: ${screenSizes.TABLET}px)`,
  FROM_DESKTOP: `@media (min-width: ${screenSizes.DESKTOP}px)`,
};

const colors = {
  JUGNLE_GREEN: "rgb(53, 96, 90)",
  WASHED_WHITE: "rgb(245, 245, 245)",
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

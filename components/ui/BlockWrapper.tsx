import { Interpolation, Theme } from "@emotion/react";

interface BlockWrapperProps {
  wrapperCss?: Interpolation<Theme>;
  as?: keyof JSX.IntrinsicElements;
}

export const BlockWrapper: React.FC<
  BlockWrapperProps & JSX.IntrinsicElements["div"]
> = ({ as: Element = "section", children, wrapperCss, ...rest }) => {
  return (
    <Element css={wrapperCss}>
      <div
        css={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 30px",
          height: "100%",
        }}
        {...rest}
      >
        {children}
      </div>
    </Element>
  );
};

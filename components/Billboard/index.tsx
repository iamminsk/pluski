import { BlockWrapper } from "../ui/BlockWrapper";

export const Billboard = () => {
  return (
    <BlockWrapper
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "60vh",
      }}
      wrapperCss={{ padding: "30px 0" }}
    >
      <h1
        css={{
          marginBottom: 15,
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

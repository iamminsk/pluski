import { createBrotliCompress } from "zlib";
import { useTheme } from "../../theme";
import { BlockWrapper } from "../ui/BlockWrapper";

export const Cabin = () => {
  const { bp, colors } = useTheme();
  return (
    <BlockWrapper
      wrapperCss={{ padding: "40px 0", color: colors.JUGNLE_GREEN }}
    >
      <h2 css={{ marginBottom: 30 }}>Dom</h2>
      <p
        css={{
          fontSize: 18,
          marginBottom: 30,
          [bp.FROM_TABLET]: {
            maxWidth: 700,
            marginBottom: 50,
          },
        }}
      >
        Dom oddalony <strong>150 m od jeziora</strong>. Od strony tarasu do domu{" "}
        <strong>przylega ściana lasu</strong>, co gwarantuje prywatność. Posesja
        jest oświetlona i ogrodzona. Na parterze znajduje się przestronny pokój
        z kominkiem przylegający do otwartej kuchni z jadalnią. Z salonu jest
        wyjście na <strong>duży taras</strong>.
      </p>
      <p
        css={{
          fontSize: 18,
          [bp.FROM_TABLET]: {
            maxWidth: 700,
            marginLeft: "auto",
          },
        }}
      >
        Kuchnia jest wyposażona w kuchenkę z płytą grzewczą i piekarnikiem,
        lodówkę z zamrażalnikiem, zmywarkę oraz podstawe akcesoria kuchenne. W
        tej części naszego domku letniskowego znajduje się ponadto łazienka z
        kabiną prysznicową. Poddasze stanowi prywatną strefę domu. W tej części
        domu znajdują się dwie sypialnie oraz wygodna łazienka. Z sypialni
        przeszklone drzwi prowadzą na duży
        <strong> przestronny, zadaszony balkon</strong>, skąd rozpościera się
        przepiękny widok na jezioro i las.
      </p>
    </BlockWrapper>
  );
};

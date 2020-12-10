import { useTheme } from "../../theme";
import { BlockWrapper } from "../ui/BlockWrapper";
import { ContactBox } from "./ContactBox";

export const Contact = () => {
  const { colors, bp } = useTheme();
  return (
    <BlockWrapper
      wrapperCss={{ padding: "40px 0", color: colors.JUGNLE_GREEN }}
    >
      <h2 css={{ marginBottom: 30 }}>Kontakt</h2>
      <div
        css={{
          [bp.FROM_TABLET]: {
            display: "flex",
            justifyContent: "space-around",
          },
        }}
      >
        <ContactBox
          title="telefon"
          anchorText="+48 730 339 131"
          href="tel:+48730339131"
          wrapperCss={{ marginBottom: 20 }}
        />
        <ContactBox
          title="e-mail"
          anchorText="domek@letniskowy.com.pl"
          href="mailto:domek@letniskowy.com.pl"
          wrapperCss={{ marginBottom: 20 }}
        />
        <ContactBox
          title="adres"
          anchorText="Kwiatowa 6</br>11-034 Pluski"
          href="https://goo.gl/maps/He4vY7vbYB52"
          isBlank
        />
      </div>
    </BlockWrapper>
  );
};

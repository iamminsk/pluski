import { BlockWrapper } from "../ui/BlockWrapper";
import { useTheme } from "../../theme";
import { PropsWithChildren } from "react";
import { ListItem } from "../ui/ListItem";
import { Link } from "../ui/Link";

export const Surroundings = () => {
  const { colors, bp } = useTheme();
  return (
    <BlockWrapper
      wrapperCss={{
        color: colors.WASHED_WHITE,
        backgroundColor: colors.JUGNLE_GREEN,
        padding: "40px 0",
      }}
    >
      <h2 css={{ color: colors.WASHED_WHITE, marginBottom: 30 }}>W okolicy</h2>
      <div
        css={{
          [bp.FROM_TABLET]: {
            display: "flex",
            justifyContent: "space-around",
          },
        }}
      >
        <ul css={{ [bp.FROM_TABLET]: { flexBasis: "40%" } }}>
          <ListItem>
            Wycieczki rowerowe np. wokół J. Plusznego i jeziora Łańskiego
          </ListItem>
          <ListItem>
            <Link href="https://www.warmiapark.pl/">
              Warmia Park SPA, Aquapark w Pluskach
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://szwaderki.pl/">
              Gospodarstwo rybne w Swaderkach,
            </Link>
          </ListItem>
          <ListItem>Stadniny koni</ListItem>
          <ListItem>
            <Link href="http://muzeumolsztynek.pl/">Skansen w Olsztynku</Link>
          </ListItem>
        </ul>
        <ul css={{ [bp.FROM_TABLET]: { flexBasis: "40%" } }}>
          <ListItem>
            <Link href="http://mazurygolf.pl/">
              Mazury Golf & Cuntry Club w Naterkach
            </Link>
          </ListItem>
          <ListItem>Loty samolotem (lotnisko w Gryźlinach)</ListItem>
          <ListItem>
            <Link href="http://www.grunwald1410.pl/">Grunwald</Link>
          </ListItem>
          <ListItem>
            <Link href="https://muzeum.olsztyn.pl/">Zamek w Olsztynie</Link>
          </ListItem>
        </ul>
      </div>
      <p css={{ marginTop: 30 }}>
        Więcej informacji znajdziesz na stronie{" "}
        <Link href="http://www.jezioro.com.pl/">jezioro.com.pl</Link>
      </p>
    </BlockWrapper>
  );
};

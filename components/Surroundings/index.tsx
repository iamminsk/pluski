import { BlockWrapper } from "../ui/BlockWrapper";
import { useTheme } from "../../theme";
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
      id="surroundings"
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
        {surroundingsAnchors.map((group) => (
          <ul css={{ [bp.FROM_TABLET]: { flexBasis: "40%" } }}>
            {group.map((anchor) => (
              <ListItem wrapperCss={{ marginBottom: 8 }}>
                {anchor.href ? (
                  <Link href={anchor.href}>{anchor.label}</Link>
                ) : (
                  anchor.label
                )}
              </ListItem>
            ))}
          </ul>
        ))}
      </div>
      <p css={{ marginTop: 30 }}>
        Więcej informacji znajdziesz na stronie{" "}
        <Link href="http://www.jezioro.com.pl/">jezioro.com.pl</Link>
      </p>
    </BlockWrapper>
  );
};

const surroundingsAnchors = [
  [
    {
      label: "Wycieczki rowerowe np. wokół J. Plusznego i jeziora Łańskiego",
      href: null,
    },
    {
      label: " Warmia Park SPA, Aquapark w Pluskach",
      href: "https://www.warmiapark.pl/",
    },
    {
      label: "Gospodarstwo rybne w Swaderkach",
      href: "https://szwaderki.pl/",
    },
    {
      label: "Stadniny koni",
      href: null,
    },
    {
      label: "Skansen w Olsztynku",
      href: "http://muzeumolsztynek.pl/",
    },
  ],
  [
    {
      label: "Mazury Golf & Cuntry Club w Naterkach",
      href: "http://mazurygolf.pl/",
    },
    {
      label: "Loty samolotem (lotnisko w Gryźlinach)",
      href: null,
    },
    {
      label: "Grunwald",
      href: "http://www.grunwald1410.pl/",
    },
    {
      label: "Zamek w Olsztynie",
      href: "https://muzeum.olsztyn.pl/",
    },
  ],
];

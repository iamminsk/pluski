import { Loader } from "@googlemaps/js-api-loader";
import { useTheme } from "../../theme";
import { BlockWrapper } from "../ui/BlockWrapper";

// TODO restrict google api calls to one domain

export const Map = () => {
  const { colors, bp } = useTheme();

  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_MAPS_KEY || "",
    version: "weekly",
  });

  loader.load().then(() => {
    const coords = { lat: 53.5981590522664, lng: 20.416747598440164 };
    // @ts-ignore
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: coords,
        zoom: 18,
        // mapTypeId: "satellite",
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: colors.JUGNLE_GREEN,
              },
            ],
          },

          {
            elementType: "labels.text.fill",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: colors.WASHED_WHITE,
              },
            ],
          },

          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              {
                color: colors.ASH_GRAY,
              },
            ],
          },

          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: colors.SKY_BLUE,
              },
            ],
          },
        ],
      }
    );

    // @ts-ignore
    const marker = new google.maps.Marker({
      position: coords,
      map: map,
    });
  });

  return (
    <section css={{ padding: "30px 0" }}>
      <BlockWrapper>
        <h2 css={{ color: colors.JUGNLE_GREEN, marginBottom: 20 }}>
          Jak do nas dotrzeć
        </h2>
      </BlockWrapper>
      <div
        id="map"
        css={{
          width: "100vw",
          paddingTop: "100%",
          [bp.FROM_TABLET]: { paddingTop: 0, height: 800 },
        }}
      />
    </section>
  );
};

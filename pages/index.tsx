import { useState } from "react";

import { Billboard } from "../components/Billboard";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { Map } from "../components/Map";
import { ReservationForm } from "../components/ReservationForm";
import { Surroundings } from "../components/Surroundings";

function HomePage() {
  const navState = useState(false);

  return (
    <>
      <Header navState={navState} />
      <main>
        <Billboard />
        <Info />
        <Gallery />
        <Map />
        <ReservationForm />
        <Surroundings />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;

import { useState } from "react";

import { Billboard } from "../components/Billboard";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { ReservationForm } from "../components/ReservationForm";

function HomePage() {
  const navState = useState(false);

  return (
    <>
      <Header navState={navState} />
      <ReservationForm />
      <Billboard />
      <Info />
    </>
  );
}

export default HomePage;

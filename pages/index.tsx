import { useState } from "react";

import { Billboard } from "../components/Billboard";
import { Header } from "../components/Header";
import { Info } from "../components/Info";

function HomePage() {
  const navState = useState(false);

  return (
    <>
      <Header navState={navState} />
      <Billboard />
      <Info />
    </>
  );
}

export default HomePage;

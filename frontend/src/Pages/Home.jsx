import React from "react";
import Banner from "../Components/Banner/Banner";

import "./CSS/Home.css";
import NewCollections from "../Component/NewCollections/NewCollections";

function Home() {
  return (
    <div className="home">
      <Banner />
      <NewCollections />
    </div>
  );
}

export default Home;

import React from "react";
import Banner from "../Components/Banner/Banner";

import "./CSS/Home.css";
import NewCollections from "../Component/NewCollections/NewCollections";
import Popular from "../Component/Popular/Popular";

function Home() {
  return (
    <div className="home">
      <Banner />
      <NewCollections />
      <Popular category={"Mobile"} />
      <Popular category={"Laptop"} />
      <Popular category={"PersonalComputer"} />
      <Popular category={"Tablet"} />
    </div>
  );
}

export default Home;

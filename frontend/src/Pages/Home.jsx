import React from "react";
import Banner from "../Component/Banner/Banner";

import "./CSS/Home.css";
import NewCollections from "../Component/NewCollections/NewCollections";
import Popular from "../Component/Popular/Popular";
import NewsLetter from "../Component/NewsLetter/NewsLetter";
import MenuBottomTabs from "../Component/MenuBottomTabs/MenuBottomTabs";

function Home() {
  return (
    <div className="home">
      <Banner />
      <NewCollections />
      <Popular category={"Mobile"} />
      <Popular category={"Laptop"} />
      <Popular category={"PersonalComputer"} />
      <Popular category={"Tablet"} />
      <NewsLetter />
      <MenuBottomTabs active={"Home"} />
    </div>
  );
}

export default Home;

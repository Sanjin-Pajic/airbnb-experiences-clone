import React from "react";
import Card from "./components/Card";
import data from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const cards = data.map((item) => {
  return (
    <Card
      key={item.id}
      item={item}
    />
  );
});

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="cardsDiv">{cards}</div>
    </div>
  );
}

export default App;

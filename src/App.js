import "./App.css";
import React from "react";
import Button from "./Button/button";
import CatFact from "./CatFact/catFact";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import { useState } from "react";

function App() {
  const [getCatFact, setGetCatFact] = useState("");

  async function handleButtonClick() {
    /* event.persist(); */
    console.log("buton clicked");
    //call CatFact API
    const response = await fetch("https://catfact.ninja/fact?max_length=64");
    //convert response to JSON
    const fact = await response.json();
    console.log(fact.fact);
    //set the fact as state to pass to fact display
    setGetCatFact(fact.fact);
  }

  return (
    <div className="App">
      <Header />
      <CatFact catFact={getCatFact} />
      <Button onClick={handleButtonClick} catState={getCatFact} />
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Fetch from "./components/Fetch"

function App() {
  return (
    <>
      <Header></Header>
      <Fetch></Fetch>
    </>
  );
}

export default App;

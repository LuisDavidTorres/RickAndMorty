import { useState } from "react";
import "./App.css";
import Fetch from "./components/Fetch";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Fetch></Fetch>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Navigation from "./navigation/Navigation";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* navabr */}
      <Navbar />

      {/* navigation */}
      <Navigation />
    </BrowserRouter>
  );
}

export default App;

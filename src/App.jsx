import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Infrastructure from "./pages/Infrastructure";
import QualityAssurance from "./pages/QualityAssurance";
import HdpeTapes from "./pages/Products/HdpeTapes";
import WovenFabrics from "./pages/Products/WovenFabrics";
import WovenBags from "./pages/Products/WovenBags";
import Sustainability from "./pages/About/Sustainability";
import OurTeam from "./pages/About/OurTeam";
import AboutUs from "./pages/About/AboutUs";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/quality-assurance" element={<QualityAssurance />} />

        {/* products */}
        <Route path="/hdpe-tapes" element={<HdpeTapes />} />
        <Route path="/woven-fabrics" element={<WovenFabrics />} />
        <Route path="/woven-bags" element={<WovenBags />} />

        {/* about */}
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

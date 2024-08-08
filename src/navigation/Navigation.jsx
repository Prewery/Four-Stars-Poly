import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Infrastructure from "../pages/Infrastructure/Infrastructure";
import QualityAssurance from "../pages/QualityAssurance/QualityAssurance";
import HdpeTapes from "../pages/Products/HdpeTapes";
import WovenBags from "../pages/Products/WovenBags";
import WovenFabrics from "../pages/Products/WovenFabrics";
import Sustainability from "../pages/About/Sustainability";
import OurTeam from "../pages/About/OurTeam";
import AboutUs from "../pages/About/AboutUs";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
      <Route path="/quality-assurance" element={<QualityAssurance />} />

      {/* products pages */}
      <Route path="/hdpe-tapes" element={<HdpeTapes />} />
      <Route path="/woven-fabrics" element={<WovenFabrics />} />
      <Route path="/woven-bags" element={<WovenBags />} />

      {/* about pages */}
      <Route path="/sustainability" element={<Sustainability />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default Navigation;

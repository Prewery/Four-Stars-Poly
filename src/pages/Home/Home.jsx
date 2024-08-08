import React from "react";
import { Box } from "@mui/material";

import "./home.css";
import CarouselComponent from "../../components/HomeComponents/CarouselComponent";
import OurCompanyComponent from "../../components/HomeComponents/OurCompanyComponent";
import WhyChooseUsComponent from "../../components/HomeComponents/WhyChooseUsComponent";
import WhatWeOfferComponent from "../../components/HomeComponents/WhatWeOfferComponent";
import HowWeWorkComponent from "../../components/HomeComponents/HowWeWorkComponent";

const Home = () => {
  return (
    <Box>
      {/* Carousel Component */}
      <CarouselComponent />

      {/* our company component */}
      <OurCompanyComponent />

      {/* why choose us component */}
      <WhyChooseUsComponent />

      {/* what we offer component */}
      <WhatWeOfferComponent />

      {/* how we work component */}
      <HowWeWorkComponent />
    </Box>
  );
};

export default Home;

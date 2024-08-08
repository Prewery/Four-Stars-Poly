import React from "react";
import { Box } from "@mui/material";

import "./home.css";
import CarouselComponent from "../../components/HomeComponents/CarouselComponent";
import OurCompanyComponent from "../../components/HomeComponents/OurCompanyComponent";
import WhyChooseUsComponent from "../../components/HomeComponents/WhyChooseUsComponent";

const Home = () => {
  return (
    <Box>
      {/* Carousel Component */}
      <CarouselComponent />

      {/* our company component */}
      <OurCompanyComponent />

      {/* why choose us component */}
      <WhyChooseUsComponent />
    </Box>
  );
};

export default Home;

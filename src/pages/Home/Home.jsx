import React from "react";
import { Box } from "@mui/material";

import "./home.css";
import CarouselComponent from "../../components/HomeComponents/CarouselComponent";
import OurCompanyComponent from "../../components/HomeComponents/OurCompanyComponent";

const Home = () => {
  return (
    <Box>
      {/* Carousel Component */}
      <CarouselComponent />

      {/* our company component */}
      <OurCompanyComponent />
    </Box>
  );
};

export default Home;

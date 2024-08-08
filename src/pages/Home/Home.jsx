import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

import "./home.css";
import CarouselComponent from "../../components/HomeComponents/CarouselComponent";

const Home = () => {
  return (
    <Box>
      {/* Carousel Component */}
      <CarouselComponent />
    </Box>
  );
};

export default Home;

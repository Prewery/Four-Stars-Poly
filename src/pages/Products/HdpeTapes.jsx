import React from "react";
import { Box } from "@mui/material";

import HeaderComponent from "../../components/ProductsComponents/HeaderComponent";
import IntroductionComponent from "../../components/ProductsComponents/IntroductionComponent";

import HdpePic from "../../assets/Images/HDPE.png";

const HdpeTapes = () => {
  const headerText = "HDPE/PP Tapes";

  return (
    <Box>
      {/* header component */}
      <HeaderComponent pic={HdpePic} text={headerText} />

      {/* introduction component */}
      <IntroductionComponent />
    </Box>
  );
};

export default HdpeTapes;

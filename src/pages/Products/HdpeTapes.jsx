import React from "react";
import { Box } from "@mui/material";

import HeaderComponent from "../../components/ProductsComponents/HeaderComponent";
import IntroductionComponent from "../../components/ProductsComponents/IntroductionComponent";
import FeaturesComponent from "../../components/ProductsComponents/FeaturesComponent";

import HdpePic from "../../assets/Images/HDPE.png";
import { hdpeItems } from "../../utils/IntroductionItem";

import { featuresItem1 } from "../../utils/FeaturesItem";

const HdpeTapes = () => {
  const headerText = "HDPE/PP Tapes";

  return (
    <Box>
      {/* header component */}
      <HeaderComponent pic={HdpePic} text={headerText} />

      {/* introduction component */}
      <IntroductionComponent items={hdpeItems} />

      {/* FeaturesComponent */}
      <FeaturesComponent items={featuresItem1} />
    </Box>
  );
};

export default HdpeTapes;

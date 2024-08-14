import React from "react";
import { Box } from "@mui/material";

import HeaderComponent from "../../components/ProductsComponents/HeaderComponent";
import IntroductionComponent from "../../components/ProductsComponents/IntroductionComponent";
import FeaturesComponent from "../../components/ProductsComponents/FeaturesComponent";
import DetailsComponent from "../../components/ProductsComponents/DetailsComponent";
import QualityServicesComponent from "../../components/ProductsComponents/QualityServicesComponent";
import FooterComponent from "../../components/HomeComponents/FooterComponent";

import WovenBagsPic from "../../assets/Images/WovenBags.png";
import { bagsItems } from "../../utils/IntroductionItem";
import { featuresItem3 } from "../../utils/FeaturesItem";
import { detailsItem3 } from "../../utils/DetailsItem";

const WovenBags = () => {
  const headerText = "BOPP Bags";

  return (
    <Box>
      {/* header component */}
      <HeaderComponent pic={WovenBagsPic} text={headerText} />

      {/* introduction component */}
      <IntroductionComponent items={bagsItems} />

      {/* features component */}
      <FeaturesComponent items={featuresItem3} />

      {/* details component */}
      <DetailsComponent items={detailsItem3} row={12} />

      {/* quality services component */}
      <QualityServicesComponent />

      {/* footer component */}
      <FooterComponent style={true} />
    </Box>
  );
};

export default WovenBags;

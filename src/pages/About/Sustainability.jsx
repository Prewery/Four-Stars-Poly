import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import HeaderComponent from "../../components/ProductsComponents/HeaderComponent";
import IntroductionComponent from "../../components/ProductsComponents/IntroductionComponent";
import AboutTextComponent from "../../components/QualityAssuranceComponents/AboutTextComponent";

import SustainabilityPic from "../../assets/Images/SustainabilityPic.jpg";
import SustainabilityPic2 from "../../assets/Images/SustainabilityPic2.png";
import { sustainabilityItems } from "../../utils/IntroductionItem";
import { sustainabilityItems2 } from "../../utils/AboutTextItem";


const Sustainability = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  const headerText = "Sustainability";

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: isMobile ? 1 : 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      {/* header component */}
      <HeaderComponent pic={SustainabilityPic} text={headerText} />

      {/* description component */}
      <IntroductionComponent
        items={sustainabilityItems}
        pics={false}
        condition={true}
        image={SustainabilityPic2}
      />

      {/* about our product quality text component */}
      <AboutTextComponent
        items={sustainabilityItems2}
        pics={true}
        settings={sliderSettings}
      />
    </Box>
  );
};

export default Sustainability;

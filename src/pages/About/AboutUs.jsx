import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import HeaderComponent from "../../components/ProductsComponents/HeaderComponent";
import IntroductionComponent from "../../components/ProductsComponents/IntroductionComponent";
import SliderComponent2 from "../../components/InfrastructureComponents/SliderComponent2";
import OurJourneyComponent from "../../components/AboutUsComponent/OurJourneyComponent";
import HowWeWorkComponent from "../../components/AboutUsComponent/HowWeWorkComponent";
import Banner from "../../components/HomeComponents/Banner";
import OurOfficeComponent from "../../components/AboutUsComponent/OurOfficeComponent";
import QualityServicesComponent from "../../components/ProductsComponents/QualityServicesComponent";
import FooterComponent from "../../components/HomeComponents/FooterComponent";

import AboutUsPic from "../../assets/Images/AboutUsPic.png";
import { aboutusItems } from "../../utils/IntroductionItem";
import { sliderItem6, sliderItem7 } from "../../utils/SliderItem";
import { bannerItem1 } from "../../utils/BannerItem";

const AboutUs = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  const headerText = "About Us";

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
      <HeaderComponent pic={AboutUsPic} text={headerText} />

      {/* description component */}
      <IntroductionComponent
        items={aboutusItems}
        pics={false}
        condition={true}
      />

      {/* slider component */}
      <SliderComponent2 settings={sliderSettings} sliderItem={sliderItem6} />

      {/* our journey component */}
      <OurJourneyComponent />

      {/* how we work component */}
      <HowWeWorkComponent settings={sliderSettings} sliderItem={sliderItem7} />

      {/* banner component */}
      <Banner items={bannerItem1} />

      {/* our office component */}
      <OurOfficeComponent />

      {/* quality services component */}
      <QualityServicesComponent />

      {/* footer component */}
      <FooterComponent />
    </Box>
  );
};

export default AboutUs;

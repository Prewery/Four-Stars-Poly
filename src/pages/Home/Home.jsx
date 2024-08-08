import React from "react";
import { Box } from "@mui/material";

import CarouselComponent from "../../components/HomeComponents/CarouselComponent";
import OurCompanyComponent from "../../components/HomeComponents/OurCompanyComponent";
import WhyChooseUsComponent from "../../components/HomeComponents/WhyChooseUsComponent";
import WhatWeOfferComponent from "../../components/HomeComponents/WhatWeOfferComponent";
import HowWeWorkComponent from "../../components/HomeComponents/HowWeWorkComponent";
import WhatAreClientSaysComponent from "../../components/HomeComponents/WhatAreClientSaysComponent";
import GetInTouchWithUsComponent from "../../components/HomeComponents/GetInTouchWithUsComponent";

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

      {/* what are client says component */}
      <WhatAreClientSaysComponent />

      {/* get in touch with us component */}
      <GetInTouchWithUsComponent />
    </Box>
  );
};

export default Home;

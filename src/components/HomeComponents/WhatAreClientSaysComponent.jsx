import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import { sliderItem3 } from "../../utils/SliderItem";
import SliderComponent from "./SliderComponent";

const WhatAreClientSaysComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const theme = true;

  return (
    <Box mt={"70px"}>
      {/* title */}
      <Box>
        {/* rectangle box design */}
        <Box
          sx={{
            width: "173px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            zIndex: "-1",
            marginTop: "20px",
            left: !isMobile ? "614px" : "60px",
          }}
        />

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
          mb={"70px"}
        >
          What our Client Says?
        </Typography>
      </Box>

      {/* slider */}
      <Box>
        <Box
          sx={{
            width: !isMobile ? "80%" : "84%",
            marginLeft: !isMobile ? "160px" : "40px",
          }}
        >
          <SliderComponent
            sliderItem={sliderItem3}
            settings={sliderSettings}
            theme={theme}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WhatAreClientSaysComponent;

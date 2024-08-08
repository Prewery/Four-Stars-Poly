import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import VideoImage from "../../assets/Images/pic4.png";
import SliderComponent from "./SliderComponent";
import { sliderItem2 } from "../../utils/SliderItem";

const HowWeWorkComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: isMobile ? 1 : 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const style = true;

  return (
    <Box>
      {/* title */}
      <Box>
        {/* rectangle box design */}
        <Box
          sx={{
            width: "83px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            zIndex: "-1",
            marginTop: "20px",
            left: !isMobile ? "662px" : "110px",
          }}
        />

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
        >
          How we Work?
        </Typography>
      </Box>

      {/* video container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
          marginBottom: "30px",
        }}
      >
        <img
          src={VideoImage}
          alt="image"
          style={{
            width: isMobile ? "350px" : "",
            height: isMobile ? "150px" : "",
          }}
        />
      </Box>

      {/* slider */}
      <Box
        sx={{
          width: "100%",
          height: "362px",
          backgroundColor: "#000080",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "80%",
            marginLeft: !isMobile ? "160px" : "50px",
          }}
        >
          <SliderComponent
            sliderItem={sliderItem2}
            settings={sliderSettings}
            style={style}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HowWeWorkComponent;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const SliderComponent2 = ({ settings, sliderItem }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        width: !isMobile ? "1147px" : "360px",
        height: !isMobile ? "365px" : "100px",
        marginLeft: !isMobile ? "190px" : "20px",
        marginTop: isMobile ? "400px" : "",
      }}
    >
      <Slider {...settings}>
        {sliderItem.map((item, index) => (
          <div key={index}>
            <img
              src={item.img}
              alt="image"
              style={{
                width: "546px",
                height: "364px",
              }}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderComponent2;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import { sliderItem } from "../../utils/SliderItem";

const SliderComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box mt={5} mb={7}>
      {/* box design */}
      {!isMobile ? (
        <div>
          {/* left side */}
          <div>
            {/* big box */}
            <div
              style={{
                position: "absolute",
                width: "63px",
                height: "63px",
                backgroundColor: "#FFF5E1",
                bottom: -415,
                left: 635,
              }}
            />

            {/* small box */}
            <div
              style={{
                position: "absolute",
                width: "19px",
                height: "19px",
                backgroundColor: "#FFF5E1",
                bottom: -415,
                left: 610,
              }}
            />
          </div>

          {/* right side */}
          <div>
            {/* big box */}
            <div
              style={{
                position: "absolute",
                width: "63px",
                height: "63px",
                backgroundColor: "#FFF5E1",
                bottom: -135,
                left: 1270,
              }}
            />

            {/* small box */}
            <div
              style={{
                position: "absolute",
                width: "19px",
                height: "19px",
                backgroundColor: "#FFF5E1",
                bottom: -81,
                left: 1330,
              }}
            />
          </div>
        </div>
      ) : null}

      {/* slider */}
      <Slider {...settings}>
        {sliderItem.map((item) => (
          <div key={item.title}>
            <img
              src={item.img}
              alt={item.title}
              style={{ width: "307px", height: "260px" }}
            />
            <h3 style={{ color: "white" }}>{item.title}</h3>
            <p style={{ color: "white" }}>{item.description}</p>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderComponent;

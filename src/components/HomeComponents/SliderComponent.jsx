import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const SliderComponent = ({ sliderItem, settings, style }) => {
  const isMobile = useMediaQuery("(max-width:600px");

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
                zIndex: "-1",
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
                zIndex: "-1",
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
                bottom: -145,
                left: 1270,
                zIndex: "-1",
              }}
            />

            {/* small box */}
            <div
              style={{
                position: "absolute",
                width: "19px",
                height: "19px",
                backgroundColor: "#FFF5E1",
                bottom: -91,
                left: 1330,
                zIndex: "-1",
              }}
            />
          </div>
        </div>
      ) : null}

      {/* slider */}
      <Box sx={{ padding: "35px" }}>
        <Slider {...settings}>
          {sliderItem.map((item) => (
            <div key={item.title}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: style ? "257px" : "307px",
                  height: style ? "187px" : "260px",
                }}
              />
            </div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default SliderComponent;

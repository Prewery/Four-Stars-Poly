import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const SliderComponent = ({ sliderItem, settings, style, theme }) => {
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
      {!theme ? (
        <Box sx={{ padding: "35px" }}>
          <Slider {...settings}>
            {sliderItem.map((item, index) => (
              <div key={index}>
                <img
                  src={item.img}
                  alt="image"
                  style={{
                    width: style ? "257px" : "300px",
                    height: style ? "187px" : "260px",
                  }}
                />
              </div>
            ))}
          </Slider>
        </Box>
      ) : (
        <Box>
          <Slider {...settings}>
            {sliderItem.map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    width: "319px",
                    height: "216px",
                    border: "1px solid #000080",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "10px",
                    gap: "15px",
                  }}
                >
                  <Typography fontSize={18}>{item.description}</Typography>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <img
                      src={item.img}
                      alt="image"
                      style={{ width: "40px", height: "40px" }}
                    />

                    <div>
                      <Typography fontWeight={600} color={"#757575"}>
                        {item.name}
                      </Typography>
                      <Typography color={"#B3B3B3"}>{item.country}</Typography>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Box>
      )}
    </Box>
  );
};

export default SliderComponent;

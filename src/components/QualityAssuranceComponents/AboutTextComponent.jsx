import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import SliderComponent2 from "../InfrastructureComponents/SliderComponent2";

const AboutTextComponent = ({ items, pics, settings }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  const sliderItem = [
    {
      img: items[0].pic1,
    },
    {
      img: items[0].pic2,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
        marginBottom: "70px",
      }}
    >
      <Typography textAlign={"justify"} width={!isMobile ? "1128px" : "90%"}>
        {items[0].description}
      </Typography>

      {pics === true && (
        <Box
          sx={{
            display: "flex",
            gap: "50px",
            marginTop: "50px",
            width: "1128px",
          }}
        >
          {/* left section */}
          <Box width={"580px"}>
            <Typography>{items[0].description2}</Typography>
          </Box>

          {/* right section */}
          <Box sx={{ display: "flex", gap: "30px", width: "665px" }}>
            {/* slider component */}
            <SliderComponent2
              settings={settings}
              sliderItem={sliderItem}
              style={true}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AboutTextComponent;

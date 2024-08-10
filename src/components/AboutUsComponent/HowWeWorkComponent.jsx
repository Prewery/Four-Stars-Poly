import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import SliderComponent2 from "../InfrastructureComponents/SliderComponent2";

const HowWeWorkComponent = ({ settings, sliderItem }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box>
      {/* title */}
      <Box>
        {/* rectangle box design */}
        <Box
          sx={{
            width: "90px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            zIndex: "-1",
            marginTop: "20px",
            left: !isMobile ? "682px" : "128px",
          }}
        />

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
          marginBottom={isMobile ? "20px" : "50px"}
        >
          How We Work?
        </Typography>
      </Box>

      {/* slider */}
      <SliderComponent2
        settings={settings}
        sliderItem={sliderItem}
        condition={true}
      />
    </Box>
  );
};

export default HowWeWorkComponent;

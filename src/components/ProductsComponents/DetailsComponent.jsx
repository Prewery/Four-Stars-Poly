import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import DetailPic from "../../assets/Images/DetailPic.png";

const DetailsComponent = ({ items }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  const [activeIndex, setActiveIndex] = useState(1);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
        marginBottom: "70px",
        width: "100%",
        height: "426px",
        backgroundImage: !isMobile ? `url(${DetailPic})` : null, // background image
        backgroundSize: "cover",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        gap: "70px",
      }}
    >
      {/* linear gradient effect */}
      {!isMobile ? (
        <Box
          sx={{
            position: "absolute",
            top: 1560,
            left: 0,
            width: "100%",
            height: "426px",
            background:
              "linear-gradient(to right, rgba(0,0,0,2) 30%, rgba(0,0,0,0.2) 80%)",
          }}
        />
      ) : null}

      {/* left section */}
      <Box
        sx={{
          position: "relative",
          width: !isMobile ? "400px" : "100%",
          height: "100%",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: isMobile ? "15px" : "",
        }}
      >
        {/* benefits */}
        <Box
          sx={{ display: "flex", marginTop: "70px", cursor: "pointer" }}
          onClick={() => handleItemClick(0)}
        >
          <Typography
            color={activeIndex === 0 ? "#DBAB3C" : "white"}
            width={"150px"}
            fontSize={activeIndex === 0 ? 28 : 20}
            fontWeight={700}
          >
            Benefits
          </Typography>
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </Box>

        {/* border */}
        <Box
          sx={{ width: "400px", height: "1px", backgroundColor: "#DBAB3C" }}
        />

        {/* process */}
        <Box
          sx={{ display: "flex", cursor: "pointer" }}
          onClick={() => handleItemClick(1)}
        >
          <Typography
            color={activeIndex === 1 ? "#DBAB3C" : "white"}
            width={"150px"}
            fontSize={activeIndex === 1 ? 28 : 20}
            fontWeight={700}
          >
            Process
          </Typography>
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </Box>

        {/* border */}
        <Box
          sx={{ width: "400px", height: "1px", backgroundColor: "#DBAB3C" }}
        />

        {/* specifications */}
        <Box
          sx={{ display: "flex", cursor: "pointer" }}
          onClick={() => handleItemClick(2)}
        >
          <Typography
            color={activeIndex === 2 ? "#DBAB3C" : "white"}
            width={"150px"}
            fontSize={20}
            fontWeight={700}
          >
            Specifications
          </Typography>
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </Box>

        {/* border */}
        <Box
          sx={{ width: "400px", height: "1px", backgroundColor: "#DBAB3C" }}
        />

        {/* speciality */}
        <Box
          sx={{ display: "flex", marginBottom: "70px", cursor: "pointer" }}
          onClick={() => handleItemClick(3)}
        >
          <Typography
            color={activeIndex === 3 ? "#DBAB3C" : "white"}
            width={"150px"}
            fontSize={activeIndex === 3 ? 28 : 20}
            fontWeight={700}
          >
            Speciality
          </Typography>
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </Box>
      </Box>

      {/* right section */}
      <Box
        sx={{
          position: "relative",
          width: !isMobile ? "848px" : "90%",
          height: !isMobile ? "348px" : "600px",
          backgroundColor: "black",
          padding: "15px 20px",
          borderRadius: "4px",
        }}
      >
        <Typography fontSize={24} fontWeight={700} color={"#DBAB3C"}>
          {items[activeIndex].title1}
        </Typography>

        <Typography color={"#fff"} textAlign={"justify"} mt={1}>
          {items[activeIndex].description1}
        </Typography>

        <Typography fontSize={24} fontWeight={700} color={"#DBAB3C"} mt={2}>
          {items[activeIndex].title2}
        </Typography>

        <Typography color={"#fff"} textAlign={"justify"} mt={1}>
          {items[activeIndex].description2}
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailsComponent;

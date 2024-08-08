import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const Banner = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        width: "100%",
        height: !isMobile ? "230px" : "470px",
        backgroundColor: "#DBAB3C",
        display: "flex",
        alignItems: !isMobile ? "center" : "",
        justifyContent: "center",
        marginTop: isMobile ? "450px" : "70px",
        padding: isMobile ? "30px" : "",
      }}
    >
      <Box
        sx={{
          width: !isMobile ? "1040px" : "330px",
          height: "126px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "10px" : "",
        }}
      >
        {/* 1st container */}
        <Box
          sx={{
            width: "260px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={24}
            textAlign={"center"}
            color={"#fff"}
          >
            1.25 Lac Sq. Ft
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={20}
            textAlign={"center"}
            color={"#000080"}
          >
            Sustainable Campus
          </Typography>
          <Typography textAlign={"center"}>
            with green energy and waste <br /> water recycling
          </Typography>
        </Box>

        {/* 2nd container */}
        <Box
          sx={{
            width: "260px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={24}
            textAlign={"center"}
            color={"#fff"}
          >
            1
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={20}
            textAlign={"center"}
            color={"#000080"}
          >
            High Scale Factory
          </Typography>
          <Typography textAlign={"center"}>
            with all modern machines & <br /> equipments
          </Typography>
        </Box>

        {/* 3rd container */}
        <Box
          sx={{
            width: "260px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={24}
            textAlign={"center"}
            color={"#fff"}
          >
            10 MT
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={20}
            textAlign={"center"}
            color={"#000080"}
          >
            Production Capacity
          </Typography>
          <Typography textAlign={"center"} marginBottom={3}>
            per annum
          </Typography>
        </Box>

        {/* 4rth container */}
        <Box
          sx={{
            width: "260px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={24}
            textAlign={"center"}
            color={"#fff"}
          >
            100+
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={20}
            textAlign={"center"}
            color={"#000080"}
          >
            Client Served
          </Typography>
          <Typography textAlign={"center"} marginBottom={3}>
            Spread across all continents
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;

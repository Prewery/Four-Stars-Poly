import React from "react";
import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "230px",
        backgroundColor: "#DBAB3C",
        marginTop: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "1040px", height: "126px", display: "flex" }}>
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
          <Typography textAlign={"center"}>per annum</Typography>
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
          <Typography textAlign={"center"}>
            Spread across all continents
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;

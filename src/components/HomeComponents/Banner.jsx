import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import design from "../../assets/Images/design.png";

const Banner = ({ items, condition, style }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        width: !isMobile ? "100%" : "null",
        height: isMobile & style ? "820px" : isMobile ? "470px" : "270px",
        backgroundColor: "#DBAB3C",
        display: "flex",
        alignItems: !isMobile ? "center" : "",
        justifyContent: "center",
        marginTop: isMobile & style ? "100px" : isMobile ? "450px" : "70px",
        padding: isMobile ? "30px 80px" : "",
        position: "relative",
      }}
    >
      {/* banner design */}
      {!isMobile ? (
        <>
          {/* left side design */}
          <div className="slanting1" />
          <div className="slanting2" />
          <div className="slanting3" />

          {/* right side design */}
          <div className="slanting4" />
          <div className="slanting5" />
          <div className="slanting6" />
        </>
      ) : null}

      {/* main container */}
      <Box
        sx={{
          width: style ? "1200px" : isMobile ? "330px" : "1040px",
          height: !(condition === true) ? "126px" : "250px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "20px" : "",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* 1st container */}
        <Box
          sx={{
            width: "260px",
            height: !(condition === true) ? "100%" : "200px",
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
            {items[0].title1}
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={20}
            textAlign={"center"}
            color={"#000080"}
          >
            {items[0].title2}
          </Typography>
          <Typography mb={style & !isMobile ? 3 : 0} textAlign={"center"}>
            {items[0].description}
          </Typography>
        </Box>

        {/* 2nd container */}
        <Box
          sx={{
            width: "260px",
            height: !(condition === true) ? "100%" : "200px",
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
            {items[1].title1}
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={20}
            textAlign={"center"}
            color={"#000080"}
          >
            {items[1].title2}
          </Typography>
          <Typography textAlign={"center"}>{items[1].description}</Typography>
        </Box>

        {/* 3rd container */}
        <Box
          sx={{
            width: "260px",
            height: !(condition === true) ? "100%" : "200px",
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
            {items[2].title1}
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={20}
            textAlign={"center"}
            color={"#000080"}
          >
            {items[2].title2}
          </Typography>
          <Typography
            textAlign={"center"}
            marginBottom={style & !isMobile ? 6 : 3}
          >
            {items[2].description}
          </Typography>
        </Box>

        {/* 4rth container */}
        <Box
          sx={{
            width: "260px",
            height: !(condition === true) ? "100%" : "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            fontWeight={700}
            fontSize={style & !isMobile ? 20 : 24}
            textAlign={"center"}
            color={"#fff"}
          >
            {items[3].title1}
          </Typography>
          <Typography
            fontWeight={700}
            fontSize={20}
            textAlign={"center"}
            color={"#000080"}
            marginTop={style & !isMobile ? 3.2 : 0}
          >
            {items[3].title2}
          </Typography>
          <Typography
            textAlign={"center"}
            marginTop={style & !isMobile ? 2.3 : 0}
          >
            {items[3].description}
          </Typography>
        </Box>

        {/* 5rth container */}
        {condition === true ? (
          <Box
            sx={{
              width: "260px",
              height: !(condition === true) ? "100%" : "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              fontWeight={700}
              fontSize={style & !isMobile ? 20 : 24}
              textAlign={"center"}
              color={"#fff"}
            >
              {items[4]?.title1}
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={style & !isMobile ? 18 : 20}
              marginTop={style & !isMobile ? 0.8 : 0}
              textAlign={"center"}
              color={"#000080"}
            >
              {items[4]?.title2}
            </Typography>
            <Typography textAlign={"center"} marginBottom={3}>
              {items[4]?.description}
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Banner;

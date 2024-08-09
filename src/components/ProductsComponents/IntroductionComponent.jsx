import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const IntroductionComponent = ({ items }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "70px",
      }}
    >
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
            left: !isMobile ? "690px" : "128px",
          }}
        />

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
        >
          Introduction
        </Typography>
      </Box>

      {/* description and pics */}
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: !isMobile ? "1128px" : "400px",
            height: "160px",
            marginTop: "40px",
          }}
        >
          {/* description */}
          <Typography textAlign={"justify"} p={isMobile ? 2 : 0}>
            {item.description}
          </Typography>

          {/* pics */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              marginTop: !isMobile ? "70px" : "40px",
              gap: "20px",
              alignItems: isMobile ? "center" : "",
            }}
          >
            <img
              src={item.pic1}
              alt="pic1"
              style={{
                width: !isMobile ? "357px" : "300px",
                height: !isMobile ? "278px" : "200px",
              }}
            />
            <img
              src={item.pic2}
              alt="pic2"
              style={{
                width: !isMobile ? "357px" : "300px",
                height: !isMobile ? "278px" : "200px",
              }}
            />
            <img
              src={item.pic3}
              alt="pic3"
              style={{
                width: !isMobile ? "357px" : "300px",
                height: !isMobile ? "278px" : "200px",
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default IntroductionComponent;

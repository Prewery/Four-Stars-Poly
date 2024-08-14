import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import Pic1 from "../../assets/Images/Approval1.png";
import Pic2 from "../../assets/Images/Approval2.png";
import Pic3 from "../../assets/Images/Approval3.jpg";
import Pic4 from "../../assets/Images/Approval4.jpg";
import Pic5 from "../../assets/Images/Approval5.jpg";

const QualityApprovalComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        height: !isMobile ? "635px" : "1470px",
        backgroundColor: "#F5F6F7",
      }}
    >
      {/* title */}
      <Box pt={5}>
        {/* rectangle box design */}
        <Box
          sx={{
            width: "112px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            zIndex: "0",
            marginTop: "20px",
            left: !isMobile ? "640px" : "128px",
          }}
        />

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
          position="relative"
        >
          Quality Approvals
        </Typography>
      </Box>

      {/* text */}
      {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          width={!isMobile ? "848px" : "320px"}
          mt={3}
          ml={isMobile ? 1 : 0}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Box> */}

      {/* certificate pics */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          gap: "20px",
          marginTop: "50px",
          alignItems: "center",
        }}
      >
        <img
          src={Pic3}
          alt="pic1"
          style={{ width: "299px", height: "371px" }}
        />

        <img
          src={Pic4}
          alt="pic1"
          style={{ width: "299px", height: "371px" }}
        />

        <img
          src={Pic5}
          alt="pic1"
          style={{ width: "299px", height: "371px" }}
        />
      </Box>
    </Box>
  );
};

export default QualityApprovalComponent;

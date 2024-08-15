import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import Pic from "../../assets/Images/OurTeamPic3.jpg";

const DirectorsDeskComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        height: !isMobile ? "500px" : "750px ",
        backgroundColor: "#F5F6F7",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "55px",
      }}
    >
      {/* left section */}
      <Box
        sx={{
          width: !isMobile ? "430px" : "90%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          paddingLeft: isMobile ? "20px" : "",
        }}
      >
        {/* rectangle box design */}
        {/* <Box
          sx={{
            width: "90px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            zIndex: "0",
            marginTop: "20px",
            left: !isMobile ? "190px" : "20px",
          }}
        /> */}

        <Typography
          color={"#000080"}
          fontWeight={700}
          fontSize={24}
          position={"relative"}
        >
          Director’s Desk
        </Typography>

        <Typography color={"#DBAB3C"} fontSize={18} fontWeight={700}>
          Leaders of Packaging Business
        </Typography>

        <Typography fontWeight={200} fontSize={14}>
          Dedicated Management Driving Innovation and Quality
        </Typography>

        <Typography textAlign={"justify"}>
          At Four Stars Poly Private Limited, our team is the backbone of our
          success. Comprised of skilled technicians, experienced engineers, and
          dedicated management, the Four Stars Poly family works tirelessly to
          ensure the highest standards in manufacturing and quality control. Our
          team’s commitment to innovation, sustainability, and customer
          satisfaction drives our continuous growth and excellence in producing
          high-quality polypropylene woven fabrics and BOPP bags. Together, we
          strive to exceed client expectations and contribute to a greener, more
          sustainable future.
        </Typography>
      </Box>

      {/* right section */}
      <Box>
        <img
          src={Pic}
          alt="pic"
          style={{
            width: !isMobile ? "627px" : "300px",
            height: !isMobile ? "363px" : "180px",
          }}
        />
      </Box>
    </Box>
  );
};

export default DirectorsDeskComponent;

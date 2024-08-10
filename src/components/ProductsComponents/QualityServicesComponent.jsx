import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Pic from "../../assets/Images/QualityPic.png";

const QualityServicesComponent = ({ style }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        height: "300px",
        width: "100%",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: isMobile & style ? "50px" : isMobile ? "550px" : "",
      }}
    >
      {/* left section */}
      <Box
        ml={!isMobile ? 25 : 3}
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <Typography fontSize={24} fontWeight={700} color={"#DBAB3C"}>
          Looking for Professional <br /> approach and Quality Services?
        </Typography>

        <Typography>
          At 4 Star, it is all about giving the clients the best quality
          products
        </Typography>

        <button className="button" onClick={() => navigate("/enquire-us")}>
          Enquire Now
        </button>
      </Box>

      {/* right section */}
      <Box mr={!isMobile ? 25 : 2} mt={isMobile ? 10 : 0}>
        <img src={Pic} alt="pic" />
      </Box>
    </Box>
  );
};

export default QualityServicesComponent;

import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import CertificatePic from "../../assets/Images/Approval6.jpg";
import CertificatePic2 from "../../assets/Images/Approval7.jpg";
import CertificatePic3 from "../../assets/Images/Approval8.jpg";

const CertificatesComponent = ({ items }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        height: !isMobile ? "1750px" : "2650px",
        backgroundColor: "#F5F6F7",
      }}
    >
      {/* title */}
      <Box>
        {/* rectangle box design */}
        {/* <Box
          sx={{
            width: "90px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            zIndex: "0",
            marginTop: "50px",
            left: !isMobile ? "682px" : "128px",
          }}
        /> */}

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
          position="relative"
          paddingTop={"30px"}
        >
          Certification
        </Typography>
      </Box>

      {/* text */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Typography textAlign={"center"} width={"1132px"}>
          2015 certification reflects Four Stars Poly Private Limited’s
          commitment to quality management systems, ensuring that their products
          meet rigorous international standards. This certification validates
          the company’s ability to consistently provide products that meet
          customer and regulatory requirements, focusing on continuous
          improvement and operational excellence
        </Typography>
      </Box>

      {/* certificates */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        {/* row 1 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "60px",
          }}
        >
          {/* box 1 */}
          <Box
            sx={{
              width: "374px",
              height: "680px",
              borderRadius: "4px",
              padding: "20px",
              boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            {/* image */}
            <img
              src={CertificatePic}
              alt="pic"
              style={{ width: "345px", height: "418px" }}
            />

            {/* certificate name */}
            <Typography color={"#000080"} fontWeight={700} fontSize={18}>
              {items[0].name}
            </Typography>

            {/* text */}
            <Typography>{items[0].description}</Typography>
          </Box>

          {/* box 2 */}
          <Box
            sx={{
              width: "374px",
              height: "680px",
              borderRadius: "4px",
              padding: "20px",
              boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            {/* image */}
            <img
              src={CertificatePic2}
              alt="pic"
              style={{ width: "345px", height: "418px" }}
            />

            {/* certificate name */}
            <Typography color={"#000080"} fontWeight={700} fontSize={18}>
              {items[1].name}
            </Typography>

            {/* text */}
            <Typography>{items[1].description}</Typography>
          </Box>
        </Box>

        {/* row 2 */}
        <Box sx={{ display: "flex", gap: "60px" }}>
          {/* box 3 */}
          <Box
            sx={{
              width: "374px",
              height: "680px",
              borderRadius: "4px",
              padding: "20px",
              boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            {/* image */}
            <img
              src={CertificatePic3}
              alt="pic"
              style={{ width: "345px", height: "418px" }}
            />

            {/* certificate name */}
            <Typography color={"#000080"} fontWeight={700} fontSize={18}>
              {items[2].name}
            </Typography>

            {/* text */}
            <Typography>{items[2].description}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CertificatesComponent;

import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import CertificatePic from "../../assets/Images/Approval1.png";

const CertificatesComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box sx={{ height: "1603px", backgroundColor: "#F5F6F7" }}>
      {/* title */}
      <Box>
        {/* rectangle box design */}
        <Box
          sx={{
            width: "90px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            zIndex: "0",
            marginTop: "50px",
            left: !isMobile ? "682px" : "128px",
          }}
        />

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
        <Box sx={{ display: "flex", gap: "60px" }}>
          {/* box 1 */}
          <Box
            sx={{
              width: "374px",
              height: "617px",
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
              Certificate Name
            </Typography>

            {/* text */}
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>

          {/* box 2 */}
          {isMobile ? null : (
            <Box
              sx={{
                width: "374px",
                height: "617px",
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
                Certificate Name
              </Typography>

              {/* text */}
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>
          )}
        </Box>

        {/* row 2 */}
        <Box sx={{ display: "flex", gap: "60px" }}>
          {/* box 3 */}
          <Box
            sx={{
              width: "374px",
              height: "617px",
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
              Certificate Name
            </Typography>

            {/* text */}
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>

          {/* box 4 */}
          {isMobile ? null : (
            <Box
              sx={{
                width: "374px",
                height: "617px",
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
                Certificate Name
              </Typography>

              {/* text */}
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CertificatesComponent;

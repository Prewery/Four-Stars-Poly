import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
// import { Map, GoogleApiWrapper } from "google-maps-react";

const OurOfficeComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box>
      {/* title */}
      <Box mt={6}>
        {/* rectangle box design */}
        <Box
          sx={{
            width: "90px",
            height: "12px",
            backgroundColor: "#DBAB3C",
            position: "absolute",
            zIndex: "-1",
            marginTop: "20px",
            left: !isMobile ? "682px" : "128px",
          }}
        />

        <Typography
          textAlign={"center"}
          fontWeight={700}
          fontSize={24}
          color={"#000080"}
        >
          Our Office
        </Typography>
      </Box>

      {/* main container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
          marginBottom: "70px",
        }}
      >
        {/* box 1 */}
        <Box
          sx={{
            width: "280px",
            height: "143px",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            color={"#000080"}
            fontSize={20}
            fontWeight={700}
            textAlign={"center"}
          >
            Head Office and Manufacturing Plant
          </Typography>

          <Typography textAlign={"center"}>
            Four Stars Poly Pvt Ltd, R64R+CRX, Mokalgaon, Madhya Pradesh 450771
          </Typography>
        </Box>

        {/* box 2 */}
        <Box
          sx={{
            width: "280px",
            height: "143px",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            color={"#000080"}
            fontSize={20}
            fontWeight={700}
            textAlign={"center"}
          >
            Reach Us
          </Typography>

          <Typography textAlign={"center"}>fourstarspoly@gmail.com</Typography>
        </Box>

        {/* box 3 */}
        <Box
          sx={{
            width: "280px",
            height: "143px",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
            boxShadow: "0px 2px 6px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            color={"#000080"}
            fontSize={20}
            fontWeight={700}
            textAlign={"center"}
          >
            Contact Us
          </Typography>

          <Typography textAlign={"center"}>
            (+91) 9425085060 <br /> (+91) 6263713033
          </Typography>
        </Box>
      </Box>

      {/* map */}
      {/* <Map
        google={this.props.google}
        style={{ width: "100%", height: "300px" }}
        zoom={10}
        initialCenter={{
          lat: 28.70406,
          lng: 77.102493,
        }}
      /> */}
    </Box>
  );
};

export default OurOfficeComponent;

// export default GoogleApiWrapper({
//   APIkEY: "",
// })(OurOfficeComponent);

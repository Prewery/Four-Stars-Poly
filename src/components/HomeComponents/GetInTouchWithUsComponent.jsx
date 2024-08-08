import React from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";

import BackgroundImage from "../../assets/Images/pic5.png";

const GetInTouchWithUsComponent = () => {
  return (
    <Box
      sx={{
        marginTop: "70px",
        marginBottom: "70px",
        width: "100%",
        height: "877px",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "695px",
          height: "693px",
          background: "white",
          borderRadius: "4px",
          padding: "20px",
        }}
      >
        {/* title */}
        <Typography
          textAlign={"center"}
          fontSize={24}
          fontWeight={700}
          color={"#000080"}
        >
          Get In Touch With Us
        </Typography>

        {/* form */}
        <Box mt={2} p={"10px"}>
          {/* name */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="name"
              style={{ fontWeight: "700px", fontSize: "18px" }}
            >
              Name<span style={{ color: "#FF0000" }}>*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Full Name"
              style={{
                height: "38px",
                borderRadius: "2px",
                border: "none",
                backgroundColor: "#F5F6F7",
                paddingLeft: "20px",
              }}
            />
          </Box>

          {/* email and contact number */}
          <Box sx={{ display: "flex", gap: "30px" }}>
            {/* email */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <label
                htmlFor="email"
                style={{ fontWeight: "700px", fontSize: "18px" }}
              >
                Email<span style={{ color: "#FF0000" }}>*</span>
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter your Email Address"
                style={{
                  height: "38px",
                  width: "357px",
                  borderRadius: "2px",
                  border: "none",
                  backgroundColor: "#F5F6F7",
                  paddingLeft: "20px",
                }}
              />
            </Box>

            {/* contact number */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <label
                htmlFor="contact-number"
                style={{ fontWeight: "700px", fontSize: "18px" }}
              >
                Contact Number<span style={{ color: "#FF0000" }}>*</span>
              </label>
              <input
                id="contact-number"
                type="text"
                placeholder="eg. 9876054786"
                style={{
                  height: "38px",
                  width: "244px",
                  borderRadius: "2px",
                  border: "none",
                  backgroundColor: "#F5F6F7",
                  paddingLeft: "20px",
                }}
              />
            </Box>
          </Box>

          {/* company name and country */}
          <Box sx={{ display: "flex", gap: "30px" }}>
            {/* company name */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <label
                htmlFor="company-name"
                style={{ fontWeight: "700px", fontSize: "18px" }}
              >
                Company name<span style={{ color: "#FF0000" }}>*</span>
              </label>
              <input
                id="company-name"
                type="text"
                placeholder="Enter your Company Name"
                style={{
                  height: "38px",
                  width: "357px",
                  borderRadius: "2px",
                  border: "none",
                  backgroundColor: "#F5F6F7",
                  paddingLeft: "20px",
                }}
              />
            </Box>

            {/* country */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <label
                htmlFor="country"
                style={{ fontWeight: "700px", fontSize: "18px" }}
              >
                Country<span style={{ color: "#FF0000" }}>*</span>
              </label>
              <Select
                id="country"
                inputProps={{ "aria-label": "Select Country" }}
                displayEmpty
                style={{
                  height: "38px",
                  width: "265px",
                  borderRadius: "2px",
                  border: "none",
                  backgroundColor: "#F5F6F7",
                  paddingLeft: "20px",
                }}
              >
                <MenuItem value="" disabled>
                  Select your Country
                </MenuItem>
                <MenuItem value="india">India</MenuItem>
                <MenuItem value="usa">USA</MenuItem>
                <MenuItem value="uk">UK</MenuItem>
              </Select>
            </Box>
          </Box>

          {/* company name and country */}
          <Box sx={{ display: "flex", gap: "30px" }}>
            {/* general query */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <label
                htmlFor="company-name"
                style={{ fontWeight: "700px", fontSize: "18px" }}
              >
                Company name<span style={{ color: "#FF0000" }}>*</span>
              </label>
              <input
                id="company-name"
                type="text"
                placeholder="Enter your Company Name"
                style={{
                  height: "38px",
                  width: "357px",
                  borderRadius: "2px",
                  border: "none",
                  backgroundColor: "#F5F6F7",
                  paddingLeft: "20px",
                }}
              />
            </Box>

            {/* subject */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <label
                htmlFor="country"
                style={{ fontWeight: "700px", fontSize: "18px" }}
              >
                Country<span style={{ color: "#FF0000" }}>*</span>
              </label>
              <Select
                id="country"
                inputProps={{ "aria-label": "Select Country" }}
                displayEmpty
                style={{
                  height: "38px",
                  width: "265px",
                  borderRadius: "2px",
                  border: "none",
                  backgroundColor: "#F5F6F7",
                  paddingLeft: "20px",
                }}
              >
                <MenuItem value="" disabled>
                  Select your Country
                </MenuItem>
                <MenuItem value="india">India</MenuItem>
                <MenuItem value="usa">USA</MenuItem>
                <MenuItem value="uk">UK</MenuItem>
              </Select>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GetInTouchWithUsComponent;

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import DetailPic from "../../assets/Images/DetailPic.png";

const DetailsComponent = ({ items, style, row }) => {
  const isMobile = useMediaQuery("(max-width:600px");

  const [activeIndex, setActiveIndex] = useState(1);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "426px",
        backgroundImage: !isMobile ? `url(${DetailPic})` : null, // background image
        backgroundSize: "cover",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        gap: "70px",
      }}
    >
      {/* linear gradient effect */}
      {!isMobile ? (
        <Box
          sx={{
            position: "absolute",
            top: style ? 1872 : 1560,
            left: 0,
            width: "100%",
            height: "426px",
            background:
              "linear-gradient(to right, rgba(0,0,0,2) 30%, rgba(0,0,0,0.2) 80%)",
          }}
        />
      ) : null}

      {/* left section */}
      <Box
        sx={{
          position: "relative",
          width: isMobile ? "100%" : "410px",
          height: "100%",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: isMobile ? "15px" : "",
        }}
      >
        {/* benefits / Responsible Program */}
        <Box
          sx={{ display: "flex", marginTop: "70px", cursor: "pointer" }}
          onClick={() => handleItemClick(0)}
        >
          <Typography
            color={activeIndex === 0 ? "#DBAB3C" : "white"}
            width={!style ? "150px" : "350px"}
            fontSize={activeIndex === 0 ? 28 : 20}
            fontWeight={style & isMobile ? 200 : 700}
            marginLeft={style & isMobile ? 3 : 0}
          >
            {!style ? "Benefits" : "Responsible Program"}
          </Typography>
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </Box>

        {/* border */}
        <Box
          sx={{ width: "400px", height: "1px", backgroundColor: "#DBAB3C" }}
        />

        {/* process / Waste Recycling Program */}
        <Box
          sx={{ display: "flex", cursor: "pointer" }}
          onClick={() => handleItemClick(1)}
        >
          <Typography
            color={activeIndex === 1 ? "#DBAB3C" : "white"}
            width={!style ? "150px" : "350px"}
            fontSize={activeIndex === 1 ? 28 : 20}
            fontWeight={style & isMobile ? 200 : 700}
            marginLeft={style & isMobile ? 3 : 0}
          >
            {!style ? "Process" : "Waste Recycling Program"}
          </Typography>
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </Box>

        {/* border */}
        <Box
          sx={{ width: "400px", height: "1px", backgroundColor: "#DBAB3C" }}
        />

        {/* specifications / Waste Management Rules */}
        <Box
          sx={{ display: "flex", cursor: "pointer" }}
          onClick={() => handleItemClick(2)}
        >
          <Typography
            color={activeIndex === 2 ? "#DBAB3C" : "white"}
            width={!style ? "150px" : "350px"}
            fontSize={20}
            fontWeight={style & isMobile ? 200 : 700}
            marginLeft={style & isMobile ? 3 : 0}
          >
            {!style ? "Specifications" : "Waste Management Rules"}
          </Typography>
          <ArrowForwardIosIcon sx={{ color: "white" }} />
        </Box>

        {/* border */}
        <Box
          sx={{ width: "400px", height: "1px", backgroundColor: "#DBAB3C" }}
        />

        {/* speciality */}
        {!style ? (
          <Box
            sx={{ display: "flex", marginBottom: "70px", cursor: "pointer" }}
            onClick={() => handleItemClick(3)}
          >
            <Typography
              color={activeIndex === 3 ? "#DBAB3C" : "white"}
              width={"150px"}
              fontSize={activeIndex === 3 ? 28 : 20}
              fontWeight={700}
            >
              Speciality
            </Typography>
            <ArrowForwardIosIcon sx={{ color: "white" }} />
          </Box>
        ) : null}
      </Box>

      {/* right section */}
      <Box
        sx={{
          position: "relative",
          width: !isMobile ? "848px" : "90%",
          height: !isMobile ? "365px" : "600px",
          backgroundColor: "black",
          padding: "15px 20px",
          borderRadius: "4px",
        }}
      >
        <Box>
          <Typography fontSize={24} fontWeight={700} color={"#DBAB3C"}>
            {items[activeIndex]?.title1}
          </Typography>

          <Typography color={"#fff"} textAlign={"justify"} mt={1}>
            {items[activeIndex]?.description1}
          </Typography>

          <Typography fontSize={24} fontWeight={700} color={"#DBAB3C"} mt={2}>
            {items[activeIndex]?.title2}
          </Typography>

          <Typography color={"#fff"} textAlign={"justify"} mt={1}>
            {items[activeIndex]?.description2}
          </Typography>

          {/* table */}
          {(activeIndex === 2) & (row === 9) ? (
            <ul>
              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Width
                  </Typography>
                  <Typography color={"#fff"}>1285 mm - 780 mm*</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "5px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Mesh
                  </Typography>
                  <Typography color={"#fff"}>5 X 5 - 14 X 14</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "5px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    No. of tape
                  </Typography>
                  <Typography color={"#fff"}>570 - 1040</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "5px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Denier
                  </Typography>
                  <Typography color={"#fff"}>550 - 2000</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "5px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    GSM
                  </Typography>
                  <Typography color={"#fff"}>48 - 175</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "5px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Fabric Colour
                  </Typography>
                  <Typography color={"#fff"}>As per Customer</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "5px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Weaving Type
                  </Typography>
                  <Typography color={"#fff"}>Standard, Crushed</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "5px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Strength
                  </Typography>
                  <Typography color={"#fff"}>As per requirement</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "5px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Elongation
                  </Typography>
                  <Typography color={"#fff"}>As per requirement</Typography>
                </Box>
              </li>
            </ul>
          ) : (activeIndex === 2) & (row === 7) ? (
            <ul>
              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Width
                  </Typography>
                  <Typography color={"#fff"}>1.81 mm - 4.23 mm</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "10px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Denier
                  </Typography>
                  <Typography color={"#fff"}>550 - 2000</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "10px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Strength
                  </Typography>
                  <Typography color={"#fff"}>As per requirement</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "10px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Elongation
                  </Typography>
                  <Typography color={"#fff"}>As per requirement</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "10px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Color
                  </Typography>
                  <Typography color={"#fff"}>As per requirement</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "10px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Shringae
                  </Typography>
                  <Typography color={"#fff"}>As per Customer</Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex", marginTop: "10px" }}>
                  <Typography color={"#fff"} width={isMobile ? 150 : 300}>
                    Tape Material
                  </Typography>
                  <Typography color={"#fff"}>PP/HDPE</Typography>
                </Box>
              </li>
            </ul>
          ) : (activeIndex === 2) & (row === 12) ? (
            <ul>
              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography
                    fontSize={14}
                    color={"#fff"}
                    width={isMobile ? 150 : 300}
                  >
                    Front width
                  </Typography>
                  <Typography fontSize={14} color={"#fff"}>
                    215 mm - 620 mm
                  </Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography
                    fontSize={14}
                    color={"#fff"}
                    width={isMobile ? 150 : 300}
                  >
                    Gusset width
                  </Typography>
                  <Typography fontSize={14} color={"#fff"}>
                    60 mm - 250 mm
                  </Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography
                    fontSize={14}
                    color={"#fff"}
                    width={isMobile ? 150 : 300}
                  >
                    Bag length
                  </Typography>
                  <Typography fontSize={14} color={"#fff"}>
                    420 mm - 1150 mm
                  </Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography
                    fontSize={14}
                    color={"#fff"}
                    width={isMobile ? 150 : 300}
                  >
                    Fabric colour
                  </Typography>
                  <Typography fontSize={14} color={"#fff"}>
                    As per customer requirement
                  </Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography
                    fontSize={14}
                    color={"#fff"}
                    width={isMobile ? 150 : 300}
                  >
                    Fabric denier
                  </Typography>
                  <Typography fontSize={14} color={"#fff"}>
                    550 - 1500
                  </Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography
                    fontSize={14}
                    color={"#fff"}
                    width={isMobile ? 150 : 300}
                  >
                    Fabric material
                  </Typography>
                  <Typography fontSize={14} color={"#fff"}>
                    PP/HDPE
                  </Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography
                    fontSize={14}
                    color={"#fff"}
                    width={isMobile ? 150 : 300}
                  >
                    Fabric type
                  </Typography>
                  <Typography fontSize={14} color={"#fff"}>
                    Circular, Flat
                  </Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography
                    fontSize={14}
                    color={"#fff"}
                    width={isMobile ? 150 : 300}
                  >
                    BOPP Material
                  </Typography>
                  <Typography fontSize={14} color={"#fff"}>
                    Gloss Finish, Matt Finish
                  </Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography
                    fontSize={14}
                    color={"#fff"}
                    width={isMobile ? 150 : 300}
                  >
                    BOPP Thickness
                  </Typography>
                  <Typography fontSize={14} color={"#fff"}>
                    10 μ - 18 μ
                  </Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography
                    fontSize={14}
                    color={"#fff"}
                    width={isMobile ? 150 : 300}
                  >
                    Extrusion Coating
                  </Typography>
                  <Typography fontSize={14} color={"#fff"}>
                    Gloss coating, Matt coating
                  </Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography
                    fontSize={14}
                    color={"#fff"}
                    width={isMobile ? 150 : 300}
                  >
                    Extrusion Coating Thickness
                  </Typography>
                  <Typography fontSize={14} color={"#fff"}>
                    16 μ - 35 μ
                  </Typography>
                </Box>
              </li>

              <li style={{ color: "white" }}>
                <Box style={{ display: "flex" }}>
                  <Typography
                    fontSize={14}
                    color={"#fff"}
                    width={isMobile ? 150 : 300}
                  >
                    No of ply (Beneath Layers)
                  </Typography>
                  <Typography fontSize={14} color={"#fff"}>
                    3, 4, 5
                  </Typography>
                </Box>
              </li>
            </ul>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default DetailsComponent;

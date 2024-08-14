import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import { CarouselItem } from "../../utils/CarouselItem";

const CarouselComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%" }}>
      <Carousel>
        {CarouselItem.map((item, index) => (
          <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>
            {/* image */}
            <Box position={"relative"} width={"100%"} height={"568px"}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />

              {/* linear gradient effect */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 60%)",
                }}
              />
            </Box>

            {/* texts and button */}
            <Box
              position="absolute"
              top={199.32}
              left={isMobile ? 20 : 100}
              display="flex"
              flexDirection="column"
              gap={3}
              width="396px"
            >
              <Typography
                color="#DBAB3C"
                fontSize={isMobile ? 20 : 24}
                fontWeight={700}
              >
                {item.title}
              </Typography>
              <Typography color="#ffffff" zIndex={999}>
                {item.description}
              </Typography>

              {/* discover more button */}
              <Button
                sx={{
                  textTransform: "none",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  width: "168px",
                  "&:hover": {
                    fontWeight: "bold",
                    backgroundColor: "white",
                    color: "black",
                    border: "2px solid black",
                  },
                }}
                onClick={() => {
                  navigate(item.navigate);
                }}
              >
                Discover More
                <ArrowForwardIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselComponent;

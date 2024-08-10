import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const AboutTextComponent = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        marginBottom: "70px",
      }}
    >
      <Typography textAlign={"justify"} width={"1128px"}>
        Our state-of-the-art quality control lab is equipped with the latest
        technology and testing equipment, allowing us to perform comprehensive
        assessments of our products at every stage of manufacturing. This
        includes tensile strength testers, impact resistance machines, and UV
        testing apparatus. These tools enable us to evaluate the durability,
        flexibility, and environmental resistance of our HDPE/PP tapes, woven
        fabrics, and BOPP bags. By conducting these rigorous tests, we ensure
        that our products can withstand the demands of various industrial
        applications and environmental conditions. Additionally, our
        manufacturing processes are governed by stringent quality control
        protocols. From extrusion and weaving to lamination and printing, each
        step is meticulously monitored to maintain consistency and precision.
        Our skilled technicians and engineers are trained to identify and
        address any potential issues, ensuring that every product meets our
        exacting standards. This dedication to quality control not only enhances
        the performance and longevity of our products but also provides our
        clients with peace of mind, knowing that they are receiving reliable and
        high-quality solutions. Furthermore, our commitment to sustainability
        extends to our quality assurance practices. We incorporate eco-friendly
        materials and processes, and our recycling plant reprocesses in-house
        plastic waste, reducing our environmental footprint. By prioritizing
        both quality and sustainability, Four Stars Poly Private Limited
        continues to deliver products that meet the evolving needs of our
        clients while supporting a greener future.
      </Typography>
    </Box>
  );
};

export default AboutTextComponent;

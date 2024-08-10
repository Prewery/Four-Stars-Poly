import { Box, Typography, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";

const AboutMenu = () => {
  const [anchorE1, setAnchorE1] = useState(null);

  const aboutOpen = Boolean(anchorE1);

  const handleProductOpen = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);

    setMobileOpen(false);
  };

  const handleSustainabilityClick = () => {
    navigate("/sustainability");
    handleClose();
  };

  const handleOurTeamClick = () => {
    navigate("/about/our-team");
    handleClose();
  };

  const handleAboutUsClick = () => {
    navigate("/about/about-us");
    handleClose();
  };

  return (
    <Box>
      <Box onClick={handleProductOpen} className="nav-link">
        <Typography>About</Typography>
        <KeyboardArrowDown />
      </Box>
      <Menu
        anchorE1={anchorE1}
        open={aboutOpen}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <MenuItem onClick={handleSustainabilityClick}>
          <Typography fontSize={14}>Sustainability</Typography>
        </MenuItem>

        <div className="border" />

        <MenuItem onClick={handleOurTeamClick}>
          <Typography fontSize={14}>Our Team</Typography>
        </MenuItem>

        <div className="border" />

        <MenuItem onClick={handleAboutUsClick}>
          <Typography fontSize={14}>About Us</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AboutMenu;

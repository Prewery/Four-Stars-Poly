import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { KeyboardArrowDown, Language } from "@mui/icons-material";

import Logo from "../assets/Images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [anchorE1, setAnchorE1] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);

  const productOpen = Boolean(anchorE1);
  const aboutOpen = Boolean(anchorE2);

  const handleProductOpen = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const handleAboutOpen = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);
    setAnchorE2(null);
  };

  const handleTapesClick = () => {
    navigate("/hdpe-tapes");
    handleClose();
  };

  const handleFabricsClick = () => {
    navigate("/woven-fabrics");
    handleClose();
  };

  const handleBagsClick = () => {
    navigate("/woven-bags");
    handleClose();
  };

  const handleSustainabilityClick = () => {
    navigate("/sustainability");
    handleClose();
  };

  const handleOurTeamClick = () => {
    navigate("/our-team");
    handleClose();
  };

  const handleAboutUsClick = () => {
    navigate("/about-us");
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense" className="navbar">
        {/* logo */}
        <Box>
          <NavLink to="/" className="nav-link">
            <img src={Logo} alt="logo" />
          </NavLink>
        </Box>

        {/* navbar mid buttons */}
        <Box className="navbar-container">
          {/* products button and its menu */}
          <Box onClick={handleProductOpen} className="nav-link">
            <Typography>Products</Typography>
            <KeyboardArrowDown />
          </Box>
          <Menu
            // className="product-menu"
            anchorEl={anchorE1}
            open={productOpen}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
          >
            <MenuItem onClick={handleTapesClick}>
              <Typography fontSize={14}>HDPE/PP Tapes</Typography>
            </MenuItem>

            <div className="border" />

            <MenuItem onClick={handleFabricsClick}>
              <Typography fontSize={14}>HDPE/PP Woven Fabrics</Typography>
            </MenuItem>

            <div className="border" />

            <MenuItem onClick={handleBagsClick}>
              <Typography fontSize={14}>BOPP Laminated Woven Bags</Typography>
            </MenuItem>
          </Menu>

          {/* Infrastructure button */}
          <NavLink to="/infrastructure" className="nav-link">
            <Typography>Infrastructure</Typography>
          </NavLink>

          {/* quality-assurance button */}
          <NavLink to="/quality-assurance" className="nav-link">
            <Typography>Quality Assurance</Typography>
          </NavLink>

          {/* about button */}
          <Box onClick={handleAboutOpen} className="nav-link">
            <Typography>About</Typography>
            <KeyboardArrowDown />
          </Box>
          <Menu
            id="about-menu"
            anchorE2={anchorE2}
            open={aboutOpen}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
          >
            <MenuItem onClick={handleSustainabilityClick}>
              <Typography fontSize={14}>Sustainability</Typography>
            </MenuItem>

            <div className="border2" />

            <MenuItem onClick={handleOurTeamClick}>
              <Typography fontSize={14}>Our Team</Typography>
            </MenuItem>

            <div className="border2" />

            <MenuItem onClick={handleAboutUsClick}>
              <Typography fontSize={14}>About Us</Typography>
            </MenuItem>
          </Menu>
        </Box>

        {/* navbar right buttons */}
        <Box className="navbar-container2">
          <Box className="nav-link">
            <Language />
            <Typography>ENG</Typography>
            <KeyboardArrowDown />
          </Box>

          <button className="button">Enquire Now</button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

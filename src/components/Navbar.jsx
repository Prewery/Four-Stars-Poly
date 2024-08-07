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
  IconButton,
  Drawer,
  List,
} from "@mui/material";
import {
  KeyboardArrowDown,
  Language,
  Menu as MenuIcon,
} from "@mui/icons-material";

import Logo from "../assets/Images/logo.png";
import "./NavbarStyle/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [anchorE1, setAnchorE1] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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

    setMobileOpen(false);
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" className="navbar">
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* logo */}
          <Box>
            <NavLink to="/" className="nav-link">
              <img src={Logo} alt="logo" />
            </NavLink>
          </Box>

          {/* navbar mid buttons */}
          <Box
            className="navbar-container"
            sx={{ display: { xs: "none", sm: "flex", lg: "flex" } }}
          >
            {/* products button and its menu */}
            <Box onClick={handleProductOpen} className="nav-link">
              <Typography>Products</Typography>
              <KeyboardArrowDown />
            </Box>
            <Menu
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
              anchorE2={anchorE2}
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

          {/* navbar right buttons */}
          <Box
            className="navbar-container2"
            sx={{ display: { xs: "none", sm: "flex", lg: "flex" } }}
          >
            <Box className="nav-link">
              <Language />
              <Typography>ENG</Typography>
              <KeyboardArrowDown />
            </Box>

            <button className="button">Enquire Now</button>
          </Box>

          {/* mobile elements */}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <Box className="nav-link">
              <Typography>ENG</Typography>
              <KeyboardArrowDown />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "black", sm: "none" } }}
        >
          <Box>
            {/* logo */}
            <NavLink to="/" className="nav-link">
              <img src={Logo} alt="logo" />
            </NavLink>

            {/* button list */}
            <List sx={{ ml: "10px", mt: "20px" }}>
              <Box display={"flex"}>
                <Typography fontSize={18} color={"#000080"}>
                  Products
                </Typography>
                <KeyboardArrowDown />
              </Box>
              {/* products pages */}
              <Box ml={1} mt={1}>
                <Typography onClick={handleTapesClick}>
                  HDPE/PP Tapes
                </Typography>

                <Typography onClick={handleFabricsClick}>
                  HDPE/PP Woven Fabrics
                </Typography>

                <Typography onClick={handleBagsClick}>
                  BOPP Laminated Woven Bags
                </Typography>
              </Box>

              <NavLink to="/infrastructure" className="nav-link">
                <Typography mt={2}>Infrastructure</Typography>
              </NavLink>

              <NavLink to="/quality-assurance" className="nav-link">
                <Typography mt={1}>Quality Assurance</Typography>
              </NavLink>

              {/* about */}
              <Box display={"flex"} mt={2}>
                <Typography fontSize={18} color={"#000080"}>
                  About
                </Typography>
                <KeyboardArrowDown />
              </Box>

              {/* about pages */}
              <Box ml={1} mt={1}>
                <Typography onClick={handleSustainabilityClick}>
                  Sustainability
                </Typography>

                <Typography onClick={handleAboutUsClick}>About Us</Typography>

                <Typography onClick={handleOurTeamClick}>Our Team</Typography>
              </Box>
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;

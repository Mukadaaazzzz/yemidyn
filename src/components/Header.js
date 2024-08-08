import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Yemidyn
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="inherit" href="#home">
            Home
          </Button>
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#products">
            Products
          </Button>
          <Button color="inherit" href="#testimonials">
            Testimonials
          </Button>
          <Button color="inherit" href="https://wa.me/c/2348169469300">
            Order
          </Button>
        </Box>
        <IconButton
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

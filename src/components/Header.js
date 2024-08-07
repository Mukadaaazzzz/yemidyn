import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" component="div">
            Yemidyn
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 3 }}>
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
          <Button
            color="inherit"
            component="a"
            href="https://wa.me/c/2348169469300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

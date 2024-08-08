import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Link
            href="https://wa.me/c/2348169469300"
            color="inherit"
            sx={{ mx: 1 }}
          >
            <WhatsApp />
          </Link>
          <Link
            href="https://www.instagram.com/yemidyn?igsh=MXQ0cHp5ZXN4YXRyNg=="
            color="inherit"
            sx={{ mx: 1 }}
          >
            <Instagram />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61557370460882&mibextid=kFxxJD"
            color="inherit"
            sx={{ mx: 1 }}
          >
            <Facebook />
          </Link>
        </Grid>
      </Grid>
      <Typography variant="body2" component="p" sx={{ mt: 2 }}>
        &copy; 2024 Yemidyn. All rights reserved. Developed in Mukadaz Labs.
      </Typography>
    </Box>
  );
};

export default Footer;

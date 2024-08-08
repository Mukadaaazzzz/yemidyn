import React from "react";
import { Box, Typography, CardContent, CardMedia, Grid } from "@mui/material";
import aboutImage from "../assets/about-image.jpg"; // Assuming there's an image for the about section

const AboutUs = () => {
  return (
    <Box
      id="about"
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={aboutImage}
            alt="About Us"
            sx={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              We are a fashion brand dedicated to bringing you the best in style
              and elegance. Our products are crafted with the highest quality
              materials and designed to make you look and feel your best.
              Whether you're looking for something casual or formal, we have
              something for everyone.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;

import React from "react";
import { Button, Typography, Box, Grid } from "@mui/material";
import heroImage from "../assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom>
              Redefining Fashion & Elegance
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
              Discover timeless pieces that define your style.
            </Typography>
            <Button variant="contained" color="primary" href="#products">
              Explore More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{ width: "100%", borderRadius: "8px" }}
              src={heroImage}
              alt="Fashion Model"
            />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default HeroSection;

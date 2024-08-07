import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import aboutImage from "../assets/about-image.jpg";

const AboutUs: React.FC = () => {
  return (
    <section id="about">
      <Box sx={{ padding: "4rem 0", backgroundColor: "#f5f5f5" }} id="about">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{ width: "100%", borderRadius: "8px" }}
              src={aboutImage}
              alt="About Yemidyn"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              About Yemidyn
            </Typography>
            <Typography variant="body1" component="p">
              At Yemidyn, we believe in the power of fashion to inspire and
              transform. Our mission is to create unique, stylish pieces that
              resonate with the spirit of adventure and elegance. From carefully
              crafted designs to premium materials, we are committed to
              delivering the best in fashion.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default AboutUs;

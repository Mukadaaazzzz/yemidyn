// src/components/Testimonials.js

import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Import testimonial images
import johnImg from "../assets/testimonials/john.jpg";
import janeImg from "../assets/testimonials/jane.jpg";
import davidImg from "../assets/testimonials/david.jpg";

// Define styles using @mui/system
const Root = styled("section")(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "#ffffff", // White background for contrast
}));

const CardStyled = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: "center",
}));

const Testimonials = () => {
  // Define testimonials data with imported images
  const testimonials = [
    {
      id: 1,
      name: "Johnson",
      feedback: "This is the best product I have ever used!",
      image: johnImg,
    },
    {
      id: 2,
      name: "Janet",
      feedback: "Amazing quality and great customer service.",
      image: janeImg,
    },
    {
      id: 3,
      name: "David",
      feedback: "Highly recommend to everyone!",
      image: davidImg,
    },
  ];

  return (
    <Root>
      <section id="testimonials">
        <Heading variant="h4">Testimonials</Heading>
        <Grid container spacing={4}>
          {testimonials.map(({ id, name, feedback, image }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <CardStyled>
                <CardMedia
                  component="img"
                  alt={name}
                  height="140"
                  image={image} // Use the imported image URL
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feedback}
                  </Typography>
                </CardContent>
              </CardStyled>
            </Grid>
          ))}
        </Grid>
      </section>
    </Root>
  );
};

export default Testimonials;

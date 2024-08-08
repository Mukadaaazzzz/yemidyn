import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import johnImage from "../assets/testimonials/john.jpg";
import janeImage from "../assets/testimonials/jane.jpg";
import davidImage from "../assets/testimonials/david.jpg";

const testimonials = [
  {
    name: "Opeyemi",
    comment: "Great quality and amazing service.",
    image: johnImage,
  },
  {
    name: "Ruqoya",
    comment: "Absolutely love the designs!",
    image: janeImage,
  },
  {
    name: "David",
    comment: "Exceptional customer experience.",
    image: davidImage,
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 8,
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <section id="testimonials">
        <Typography variant="h4" gutterBottom align="center">
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "1rem",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  component="img"
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    marginRight: "1rem",
                  }}
                />
                <Box>
                  <Typography variant="h6">{testimonial.name}</Typography>
                  <Typography variant="body2">{testimonial.comment}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </section>
    </Box>
  );
};

export default Testimonials;

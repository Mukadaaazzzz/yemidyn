import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import person1 from "../assets/testimonials/david.jpg";
import person2 from "../assets/testimonials/jane.jpg";
import person3 from "../assets/testimonials/john.jpg";
import person4 from "../assets/testimonials/john.jpg";

const testimonials = [
  { name: "Jane", feedback: "Amazing products!", image: person1 },
  { name: "Johnson", feedback: "Great quality.", image: person2 },
  { name: "Mary", feedback: "Stylish and affordable.", image: person3 },
  { name: "Smith", feedback: "Highly recommend!", image: person4 },
];

const Testimonials = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <section id="testimonials">
        <Typography variant="h4" component="h2" gutterBottom>
          Testimonials
        </Typography>
        <Grid container spacing={2}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={testimonial.image}
                  alt={testimonial.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.feedback}
                  </Typography>
                  <section />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    </Box>
  );
};

export default Testimonials;

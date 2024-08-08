import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import hoodieImage from "../assets/products/hoodies.jpg";
import tshirtImage from "../assets/products/tshirts.jpg";
import capImage from "../assets/products/caps.jpg";
import sweatbandImage from "../assets/products/sweatbands.jpg";
import comingSoon from "../assets/products/coming-soon.jpg";

const products = [
  {
    name: "Hoodies",
    description: "Comfortable and stylish hoodie.",
    image: hoodieImage,
  },
  { name: "T-Shirts", description: "Classic t-shirt.", image: tshirtImage },
  { name: "Caps", description: "Cool cap.", image: capImage },
  {
    name: "Sweatbands",
    description: "Sporty sweatband.",
    image: sweatbandImage,
  },
  { name: "Coming Soon", description: "Anticipate.", image: comingSoon },
];

const ProductShowcase = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <section id="products">
        <Typography variant="h4" component="h2" gutterBottom>
          Our Products
        </Typography>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <Button
                  size="small"
                  color="primary"
                  href="https://wa.me/c/2348169469300"
                >
                  View More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    </Box>
  );
};

export default ProductShowcase;

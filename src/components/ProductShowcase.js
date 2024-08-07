// src/components/ProductShowcase.js

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

// Import product images
import hoodieImg from "../assets/products/hoodies.jpg";
import tshirtImg from "../assets/products/tshirts.jpg";
import capImg from "../assets/products/caps.jpg";
import sweatbandImg from "../assets/products/sweatbands.jpg";
import socksImg from "../assets/products/socks.jpg";
import coming from "../assets/products/coming-soon.jpg";

// Define styles using @mui/system
const Root = styled("section")(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "#f5f5f5", // Light gray background
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

const ProductShowcase = () => {
  // Define product data with imported images
  const products = [
    {
      id: 1,
      name: "Hoodie",
      description: "A comfortable and stylish hoodie.",
      image: hoodieImg,
    },
    {
      id: 2,
      name: "T-Shirt",
      description: "A classic t-shirt for everyday wear.",
      image: tshirtImg,
    },
    {
      id: 3,
      name: "Cap",
      description: "A trendy cap to complete your outfit.",
      image: capImg,
    },
    {
      id: 4,
      name: "Sweatband",
      description: "A versatile sweatband for sports or casual wear.",
      image: sweatbandImg,
    },
    {
      id: 5,
      name: "Socks",
      description: "Comfortable and stylish socks for all occasions.",
      image: socksImg,
    },
    {
      id: 6,
      name: "ComingSoon",
      description: "Coming soon.",
      image: coming,
    },
  ];

  return (
    <Root>
      <section id="products">
        <Heading variant="h4">Our Products</Heading>
        <Grid container spacing={4}>
          {products.map(({ id, name, description, image }) => (
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
                    {description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component="a"
                    href="https://wa.me/c/2348169469300"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ marginTop: "1rem" }}
                  >
                    View More
                  </Button>
                </CardContent>
              </CardStyled>
            </Grid>
          ))}
        </Grid>
      </section>
    </Root>
  );
};

export default ProductShowcase;

import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#f5f5f5",
        padding: "2rem 0",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Link
          href="https://wa.me/c/2348169469300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton sx={{ color: "#f5f5f5" }}>
            <WhatsAppIcon />
          </IconButton>
        </Link>
        <Link
          href="https://www.instagram.com/yemidyn?igsh=MXQ0cHp5ZXN4YXRyNg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton sx={{ color: "#f5f5f5" }}>
            <InstagramIcon />
          </IconButton>
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61557370460882&mibextid=kFxxJD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton sx={{ color: "#f5f5f5" }}>
            <FacebookIcon />
          </IconButton>
        </Link>
      </Box>
      <Typography variant="body2" sx={{ marginTop: "1rem" }}>
        &copy; {new Date().getFullYear()} Yemidyn. All rights reserved.
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#b3b3b3" }}
      >
        Developed in Mukadaz Labs
      </Typography>
    </Box>
  );
};

export default Footer;

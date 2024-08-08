import React from "react";
import logo from "../assets/logo.png"; // Ensure this path is correct
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "@mui/material/styles";

const Header = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Products", to: "products" },
    { label: "Testimonials", to: "testimonials" },
    {
      label: "Order",
      to: "order",
      external: true,
      link: "https://wa.me/c/2348169469300",
    },
  ];

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src={logo} alt="Yemidyn Logo" style={{ height: "50px" }} />
        </Box>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              keepMounted
            >
              {menuItems.map((item, index) =>
                item.external ? (
                  <MenuItem
                    key={index}
                    onClick={handleClose}
                    component="a"
                    href={item.link}
                  >
                    {item.label}
                  </MenuItem>
                ) : (
                  <MenuItem key={index} onClick={handleClose}>
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      {item.label}
                    </ScrollLink>
                  </MenuItem>
                )
              )}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {menuItems.map((item, index) =>
              item.external ? (
                <Button
                  key={index}
                  color="inherit"
                  component="a"
                  href={item.link}
                >
                  {item.label}
                </Button>
              ) : (
                <Button key={index} color="inherit">
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    {item.label}
                  </ScrollLink>
                </Button>
              )
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <section id="home">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Yemidyn
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleMenuOpen}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                PaperProps={{
                  style: {
                    maxHeight: 48 * 4.5,
                    width: "20ch",
                  },
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    window.location.href = "#home";
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    window.location.href = "#about";
                  }}
                >
                  About
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    window.location.href = "#products";
                  }}
                >
                  Products
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    window.location.href = "#testimonials";
                  }}
                >
                  Testimonials
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    window.location.href = "https://wa.me/c/2348169469300";
                  }}
                >
                  Order
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div
              style={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button color="inherit" href="#home">
                Home
              </Button>
              <Button color="inherit" href="#about">
                About
              </Button>
              <Button color="inherit" href="#products">
                Products
              </Button>
              <Button color="inherit" href="#testimonials">
                Testimonials
              </Button>
              <Button color="inherit" href="https://wa.me/c/2348169469300">
                Order
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </section>
  );
};

export default Header;

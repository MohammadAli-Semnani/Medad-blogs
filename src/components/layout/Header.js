import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Link style={{color: "#fff", textDecoration: "none"}} to="/">
              <Typography
                fontWeight="700"
                align="right"
                variant="h4"
                component="h1">
                وبلاگ مداد
              </Typography>
            </Link>
            <IconButton
              align="left"
              size="large"
              color="inherit"
              edge="start"
              aria-label="menu"
              sx={{mr: 1}}>
              <ModeEditOutlineIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;

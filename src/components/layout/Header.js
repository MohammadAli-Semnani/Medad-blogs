import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
const Header = () => {
  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              fontWeight="700"
              flex={1}
              align="right"
              variant="h4"
              component="h1">
              مداد
            </Typography>
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

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
   mode: 'light',
 },
  direction:"rtl",
  typography: {
    fontFamily: `"YekanBakh", "Roboto", "Arial"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },
});

export default theme;

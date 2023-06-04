import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#9370DB",
    },
    white: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Open Sans",
      "Fjalla One",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default theme;

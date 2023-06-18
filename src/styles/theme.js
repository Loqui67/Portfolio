import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#9370DB",
    },
    white: {
      main: "#fff",
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
    body1: {
      color: "#000",
    },
  },
});

export default theme;

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0073e1",
      btnBgHover: "#000000",
    },
    secondary: {
      main: "#fafcff",
    },
    error: {
      main: red.A400,
    },
    white: {
      main: "#ffffff",
    },
    black: {
      main: "#000000",
    },
    buttonBg: {
      main: "#0073e1",
    },
  },
  typography: {
    fontFamily: ["Inter", "Roboto"].join(",")
  },
});

export default theme;

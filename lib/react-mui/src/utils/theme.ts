import { createTheme } from "@mui/material/styles";
import { Colors } from "constants/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    error: {
      main: Colors.error,
    },
    background: {
      default: Colors.white,
    },
    grey: {
      50: Colors.gray50,
      300: Colors.gray300,
      500: Colors.lightGrayishGreen,
    },
    common: {
      black: Colors.black,
      white: Colors.white,
    },
    text: {
      primary: Colors.textPrimary,
    },
    divider: Colors.dividerPrimary,
  },
  typography: {
    htmlFontSize: 14,
    fontFamily: "Verdana",
  },
});

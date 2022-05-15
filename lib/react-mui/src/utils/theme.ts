import { createTheme } from "@mui/material/styles";
import { colors, fontSize } from "constants/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
    background: {
      default: colors.white,
    },
    grey: {
      50: colors.gray50,
      300: colors.gray300,
      500: colors.lightGrayishGreen,
    },
    common: {
      black: colors.black,
      white: colors.white,
    },
    text: {
      primary: colors.textPrimary,
    },
    divider: colors.dividerPrimary,
  },
  typography: {
    htmlFontSize: fontSize.fontSizeBase,
    fontFamily: "Verdana",
  },
});

export default theme;

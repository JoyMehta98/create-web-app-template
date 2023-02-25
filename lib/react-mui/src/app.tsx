import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { AppRoutes } from "routes";
import { theme } from "utils/theme";
import "./assets/css/app.scss";

export const App = () => (
  <BrowserRouter>
    <Suspense fallback>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Suspense>
  </BrowserRouter>
);

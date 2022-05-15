import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "routes";
import "./assets/css/app.scss";

const App = () => (
  <BrowserRouter>
    <Suspense fallback>
      <AppRoutes />
    </Suspense>
  </BrowserRouter>
);

export default App;

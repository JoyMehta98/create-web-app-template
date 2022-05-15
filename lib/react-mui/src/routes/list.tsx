import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RoutePath from "./paths";

const Dashboard = lazy(() => import("pages/dashboard"));

const AppRoutes = () => (
  <Routes>
    <Route path={RoutePath.dashboard} element={<Dashboard />} />
  </Routes>
);

export default AppRoutes;
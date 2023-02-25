import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "routes/paths";

const Dashboard = lazy(() => import("pages/dashboard"));

export const AppRoutes = () => (
  <Routes>
    <Route path={RoutePaths.dashboard} element={<Dashboard />} />
  </Routes>
);

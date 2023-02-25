import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ROUTE_PATH from "routes/paths";

const Dashboard = lazy(() => import("pages/dashboard"));

export const AppRoutes = () => (
  <Routes>
    <Route path={ROUTE_PATH.dashboard} element={<Dashboard />} />
  </Routes>
);

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePath } from "./RoutePath";

const Dashboard = lazy(() => import("pages/dashboard"));

export const AppRoutes = () => (
  <Routes>
    <Route path={RoutePath.dashboard} element={<Dashboard />} />
  </Routes>
);

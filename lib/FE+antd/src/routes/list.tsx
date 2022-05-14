import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ROUTE_PATH from "routes/paths";

const LoginScreen = lazy(() => import("pages/auth/login"));
const Dashboard = lazy(() => import("pages/dashboard"));
const Users = lazy(() => import("pages/users"));
const Properties = lazy(() => import("pages/properties"));
const AddProperties = lazy(() => import("pages/properties/add"));
const EditProperties = lazy(() => import("pages/properties/add"));
const StaffMembers = lazy(() => import("pages/properties/staffMembers"));
const MenuItem = lazy(() => import("pages/services/menuItems"));
const DiningOut = lazy(() => import("pages/services/diningOut"));
const AddRestaurant = lazy(() => import("pages/services/diningOut/add"));
const EditRestaurant = lazy(() => import("pages/services/diningOut/add"));
const SpaService = lazy(() => import("pages/services/spaServices"));
const InterestingPoints = lazy(
  () => import("pages/services/interestingPoints")
);
const Bookings = lazy(() => import("pages/bookings"));
const AdminUsers = lazy(() => import("pages/adminUsers"));
const PushNotifications = lazy(() => import("pages/pushNotifications"));
const AddPushNotifications = lazy(() => import("pages/pushNotifications/add"));
const EditPushNotification = lazy(() => import("pages/pushNotifications/add"));
const Settings = lazy(() => import("pages/settings"));
const Lookup = lazy(() => import("pages/masters/lookup"));
const Amenities = lazy(() => import("pages/masters/amenities"));

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTE_PATH.dashboard} element={<Dashboard />} />
    <Route path={ROUTE_PATH.users} element={<Users />} />
    <Route path={ROUTE_PATH.properties} element={<Properties />} />
    <Route path={ROUTE_PATH.addProperties} element={<AddProperties />} />
    <Route path={ROUTE_PATH.editProperties} element={<EditProperties />} />
    <Route path={ROUTE_PATH.viewStaffMembers} element={<StaffMembers />} />
    <Route path={ROUTE_PATH.menuItem} element={<MenuItem />} />
    <Route path={ROUTE_PATH.diningOut} element={<DiningOut />} />
    <Route path={ROUTE_PATH.addRestaurant} element={<AddRestaurant />} />
    <Route path={ROUTE_PATH.editRestaurant} element={<EditRestaurant />} />
    <Route path={ROUTE_PATH.spaService} element={<SpaService />} />
    <Route
      path={ROUTE_PATH.interestingPoints}
      element={<InterestingPoints />}
    />
    <Route path={ROUTE_PATH.bookings} element={<Bookings />} />
    <Route path={ROUTE_PATH.adminUsers} element={<AdminUsers />} />
    <Route path={ROUTE_PATH.settings} element={<Settings />} />
    <Route path={ROUTE_PATH.lookup} element={<Lookup />} />
    <Route path={ROUTE_PATH.amenities} element={<Amenities />} />
    <Route
      path={ROUTE_PATH.pushNotifications}
      element={<PushNotifications />}
    />
    <Route
      path={ROUTE_PATH.addPushNotifications}
      element={<AddPushNotifications />}
    />
    <Route
      path={ROUTE_PATH.editPushNotification}
      element={<EditPushNotification />}
    />
    <Route path={ROUTE_PATH.lookup} element={<Lookup />} />
  </Routes>
);

const AuthRoutes = () => (
  <Routes>
    <Route path={ROUTE_PATH.loginScreen} element={<LoginScreen />} />
  </Routes>
);

export { AppRoutes, AuthRoutes };

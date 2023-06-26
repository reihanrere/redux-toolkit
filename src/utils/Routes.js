import React from "react";
import { Route, Routes } from "react-router-dom";
import routesList from "./RoutesList";

const UsersIndex = React.lazy(() => import("../pages/users/index"));
const UsersCreate = React.lazy(() => import("../pages/users/create"));
const Dashboard = React.lazy(() => import("../pages/dashboard"));

function RoutePath() {
  return (
    <>
      <Routes>
        <Route path={routesList.users.root} element={<UsersIndex />} />
        <Route path={routesList.dashboard.root} element={<Dashboard />} />
        <Route path={routesList.users.create} element={<UsersCreate />} />
      </Routes>
    </>
  );
}

export default RoutePath;

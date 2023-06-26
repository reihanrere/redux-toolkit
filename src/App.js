import { Routes, Route } from "react-router-dom";
import UsersPage from "./pages/users";
import CreateUsersPage from "./pages/users/create";
import RoutePath from "./utils/Routes";
import React, { Suspense } from "react";
import ResponsiveDrawer from "./components/responsiveDrawer";

function App() {
  return (
    <div className="App">
      {/* <UsersPage /> */}
      <ResponsiveDrawer>
        <Suspense fallback={<div>Loading...</div>}>
          <RoutePath />
        </Suspense>
      </ResponsiveDrawer>
    </div>
  );
}
export default App;

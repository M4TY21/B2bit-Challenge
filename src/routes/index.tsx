import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  const acess_token = localStorage.getItem("acess_token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={acess_token ? <Profile /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

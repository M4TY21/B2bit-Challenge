import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";

export function App() {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

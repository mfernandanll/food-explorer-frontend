import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { New } from "../pages/New";
import { Edit } from "../pages/Edit";
import { Details } from "../pages/Details";

export function AppRoutes({ isAdmin = false }) {
  return (
    <Routes>
      <Route path="/" element={<Home isAdmin={isAdmin} />} />
      <Route path="/new" element={<New isAdmin={isAdmin} />} />
      <Route path="/edit/:id" element={<Edit isAdmin={isAdmin} />} />
      <Route path="/details/:id" element={<Details isAdmin={isAdmin} />} />
    </Routes>
  )
}
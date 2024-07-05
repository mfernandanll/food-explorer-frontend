import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useState } from "react";
import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(true);
  
  return (
    <BrowserRouter>
      { user ? <AppRoutes isAdmin={isAdmin} /> : <AuthRoutes /> }
    </BrowserRouter>
  )
}
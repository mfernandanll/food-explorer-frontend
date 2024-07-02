import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useState } from "react";

export function Routes() {
  const [isAdmin, setIsAdmin] = useState(true);
  
  return (
    <BrowserRouter>
      {
        <AppRoutes isAdmin={isAdmin} />
        // <AuthRoutes />
      }
    </BrowserRouter>
  )
}
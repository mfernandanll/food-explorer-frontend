import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();

  let isAdmin = false;
  if (user &&  user.role === "admin") {
    isAdmin = true;
  }
  
  return (
    <BrowserRouter>
      { user ? <AppRoutes isAdmin={isAdmin} /> : <AuthRoutes /> }
    </BrowserRouter>
  )
}
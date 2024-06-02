import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import * as React from "react";

export default function PrivateRoutes() {
  const { user } = useAuth();

  // return <Outlet />;
  return user ? <Outlet /> : <Navigate to='/login' />;
}
      
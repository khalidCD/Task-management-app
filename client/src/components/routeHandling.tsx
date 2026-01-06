import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

export function RouteHandling({ children }: { children: ReactNode }) {
  const loggedIn = localStorage.getItem("token");
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

import React from "react";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  // Check if token is present in localStorage
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect to login page if token is not present
    return <Navigate to="/login" />;
  }

  // If token is present, render the children (admin dashboard)
  return <>{children}</>;
}

export default AdminRoute;

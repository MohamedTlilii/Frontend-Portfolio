import React from "react";
import { Navigate } from "react-router-dom";
function PublicRoute({ children }) {
  let isAdmin = localStorage.getItem("isAdmin");

  if (isAdmin === "true") {
    return 
    // <Navigate to="/dashboard" />
    ;
  } else {
    return <> {children} </>;
  }
}

export default PublicRoute;

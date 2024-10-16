// File: /src/components/protectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />; // Redirect to login if no token
  }

  return children; // Render child component if token exists
};

export default ProtectedRoute;

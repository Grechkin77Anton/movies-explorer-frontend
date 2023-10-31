import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ element: Component,loggedIn, ...props }){

  return loggedIn ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={"/"} replace />
  );
};

export default ProtectedRoute;
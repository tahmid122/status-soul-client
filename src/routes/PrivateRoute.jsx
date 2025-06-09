import React from "react";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner/Spinner";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <Spinner />;
  if (user && user.email) return children;
  return <Navigate to={"/login"} />;
};

export default PrivateRoute;

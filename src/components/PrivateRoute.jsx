import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { useAuth0 } from "@auth0/auth0-react";
const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0();
  console.log(user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;

import React, { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../AuthProvider/AuthContext";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) return <Navigate to="/signin" />;
  return <>{children}</>;
};

export default PrivateRoute;

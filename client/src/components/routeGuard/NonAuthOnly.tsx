import React, { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../AuthProvider/AuthContext";

const NonAuthOnly: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useAuthContext();
  if (user?.email && user.accessToken) return <Navigate to="/" />;
  return <>{children}</>;
};

export default NonAuthOnly;

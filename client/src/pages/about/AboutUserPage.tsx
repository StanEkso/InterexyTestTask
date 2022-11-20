import React from "react";
import { useAuthContext } from "../../components/AuthProvider/AuthContext";
import { NotFoundRedirect } from "../notfound/NotFoundPage";

const AboutUserPage = () => {
  const { user } = useAuthContext();
  if (!user) return <NotFoundRedirect />;
  return (
    <div className="p-2">
      <h3 className="font-bold">Email</h3>
      <p className="text-xl">{user.email} </p>
      <h3 className="font-bold">Biography</h3>
      <p className="text-xl">{user.bio} </p>
    </div>
  );
};

export default AboutUserPage;

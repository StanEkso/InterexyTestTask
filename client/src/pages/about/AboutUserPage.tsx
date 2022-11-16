import React from "react";
import { useAuthContext } from "../../components/AuthProvider/AuthContext";
import { NotFoundRedirect } from "../notfound/NotFoundPage";

const AboutUserPage = () => {
  const { user } = useAuthContext();
  if (!user) return <NotFoundRedirect />;
  return (
    <div className="border-2 p-2">
      <h3 className="font-bold text-2xl">Your email: {user.email}</h3>
      <h3 className="font-bold">Biography</h3>
      <p className="text-xl">{user.bio} </p>
    </div>
  );
};

export default AboutUserPage;

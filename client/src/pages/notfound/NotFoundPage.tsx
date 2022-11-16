import React from "react";
import { Link, Navigate } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="">
        <h1 className="text-3xl font-bold">404 | Not Found</h1>
        <p className="text-center text-2xl text-blue-500">
          <Link to="/">Go to main page</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;

export const NotFoundRedirect = () => <Navigate to="/404" />;

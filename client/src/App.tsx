import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Layout from "./components/layout/Layout";
import HeroDetailsPage, {
  heroDetailsLoader,
} from "./pages/hero/HeroDetailsPage";
import HomePage from "./pages/home/HomePage";
import NotFoundPage, { NotFoundRedirect } from "./pages/notfound/NotFoundPage";
import SignUpPage from "./pages/signup/SignUpPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/hero/:id",
        errorElement: <NotFoundRedirect />,
        element: <HeroDetailsPage />,
        loader: heroDetailsLoader,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/404",
        element: <NotFoundPage />,
      },
      {
        path: "*",
        element: <Navigate to="/404" />,
      },
    ],
  },
]);
const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;

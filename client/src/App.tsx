import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Layout from "./components/layout/Layout";
import PrivateRoute from "./components/routeGuard/PrivateRoute";
import AboutUserPage from "./pages/about/AboutUserPage";
import HeroDetailsPage, {
  heroDetailsLoader,
} from "./pages/hero/HeroDetailsPage";
import HomePage from "./pages/home/HomePage";
import NotFoundPage, { NotFoundRedirect } from "./pages/notfound/NotFoundPage";
import SignInPage from "./pages/signin/SignInPage";
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
        path: "/about",
        element: (
          <PrivateRoute>
            <AboutUserPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
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

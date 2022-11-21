import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Layout from "./components/layout/Layout";
import NonAuthOnly from "./components/routeGuard/NonAuthOnly";
import PrivateRoute from "./components/routeGuard/PrivateRoute";
import AboutUserPage from "./pages/about/AboutUserPage";
import HeroDetailsPage, {
  heroDetailsLoader,
} from "./pages/hero/HeroDetailsPage";
import HomePage from "./pages/home/HomePage";
import NotFoundPage, { NotFoundRedirect } from "./pages/notfound/NotFoundPage";
import SignInPage from "./pages/signin/SignInPage";
import SignUpPage from "./pages/signup/SignUpPage";

export const BASENAME = process.env.BASENAME || "/InterexyTestTask";

const router = createBrowserRouter(
  [
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
          element: (
            <NonAuthOnly>
              <SignUpPage />
            </NonAuthOnly>
          ),
        },
        {
          path: "/signin",
          element: (
            <NonAuthOnly>
              <SignInPage />
            </NonAuthOnly>
          ),
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
  ],
  {
    basename: BASENAME,
  }
);
const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;

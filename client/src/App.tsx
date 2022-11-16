import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import HeroDetailsPage, {
  heroDetailsLoader,
} from "./pages/hero/HeroDetailsPage";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/notfound/NotFoundPage";
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
        element: <HeroDetailsPage />,
        loader: heroDetailsLoader,
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
  return <RouterProvider router={router} />;
};

export default App;

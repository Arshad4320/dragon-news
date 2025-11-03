import HomeLayout from "../Layouts/HomeLayout";

import { createBrowserRouter } from "react-router";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthLayout from "../Layouts/AuthLayout";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";
import PrivetRoute from "./../authProvider/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/category/:id",
        loader: () => fetch("/news.json"),
        element: <CategoryNews />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/category-details/:id",
    element: (
      <PrivetRoute>
        <CategoryDetails />
      </PrivetRoute>
    ),
    loader: () => fetch("/news.json"),
  },
]);

export default router;

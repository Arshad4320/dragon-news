import HomeLayout from "../Layouts/HomeLayout";

import { createBrowserRouter } from "react-router";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import CategoryNews from "../pages/CategoryNews/CategoryNews";
import Home from "../pages/Home/Home";

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
]);

export default router;

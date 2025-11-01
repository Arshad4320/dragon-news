import HomeLayout from "../Layouts/HomeLayout";

import { createBrowserRouter } from "react-router";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/career",
    element: <Career />,
  },
]);

export default router;

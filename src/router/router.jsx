import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Packages from "../pages/Packages";
import MyBookings from "../pages/MyBookings";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/allPackages',
        Component: Packages,
      },
      {
        path: '/myBookings',
        Component: MyBookings,
      },
      {
        path: '/about',
        Component: About,
      }
    ]
  },
]);

export default router;
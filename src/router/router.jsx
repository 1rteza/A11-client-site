import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Packages from "../pages/Packages";
import MyBookings from "../pages/MyBookings";
import About from "../pages/About";
import Loading from "../pages/Loading";
import PrivateRoute from "../contexts/PrivateRoute";
import MyPackages from "../pages/MyPackages";
import AddPackages from "../pages/AddPackages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        // hydrateFallbackElement: <Loading></Loading>,
        Component: Home,
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
        element:
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
      },
      {
        path: '/myPackages',
        element:
          <PrivateRoute>
            <MyPackages></MyPackages>
          </PrivateRoute>
      },
      {
        path: '/addPackage',
        element:
          <PrivateRoute>
            <AddPackages></AddPackages>
          </PrivateRoute>
      },
      {
        path: '/about',
        Component: About,
      }
    ]
  },
]);

export default router;
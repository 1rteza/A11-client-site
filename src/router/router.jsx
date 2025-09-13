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
import Error from "../pages/Error";
import PackageDetails from "../pages/PackageDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://chill-and-travel-server.vercel.app/tourPackages'),
        hydrateFallbackElement: <Loading></Loading>,
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
        loader: () => fetch('https://chill-and-travel-server.vercel.app/tourPackages'),
        hydrateFallbackElement: <Loading></Loading>,
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
      },
      {
        path: '/package/:id',
        loader: ({params}) => fetch(`https://chill-and-travel-server.vercel.app/tourPackages/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        element:
          <PrivateRoute>
            <PackageDetails></PackageDetails>
          </PrivateRoute>
      },
      {
        path: '/*',
        Component: Error
      }
    ]
  },
]);

export default router;
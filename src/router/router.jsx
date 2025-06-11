import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import Error from "../pages/Error/Error";
import Profile from "../pages/Profile/Profile";
import About from "../pages/Profile/About/About";
import Posts from "../pages/Profile/Posts/Posts";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <RootLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "profile",
        Component: Profile,
        children: [
          {
            index: true,
            Component: Posts,
          },
          {
            path: "posts",
            Component: Posts,
          },
          {
            path: "about",
            Component: About,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "*",
    Component: Error,
  },
]);

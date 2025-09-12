import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // équivalent path: ""
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
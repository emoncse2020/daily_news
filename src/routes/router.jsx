import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";

import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import NotFoundPage from "../pages/NotFoundPage";
import Categories from "../components/Categories";
import NewsDetails from "../components/NewsDetails";

const router = createBrowserRouter([
  {
    path: "",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: async () => {
          const res = await fetch("/news.json");
          if (!res.ok) throw new Error("Failed to fetch news.json");
          return res.json();
        },
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news-details/:id",
    Component: NewsDetails,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <h1>Loading...</h1>,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

export default router;

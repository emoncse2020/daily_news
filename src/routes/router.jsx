import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "",
    Component: HomeLayout,
  },
  // {
  //     path: '/auth',
  //     Component:
  // },
  // {
  //     path: '/news',
  //     Component:
  // },
  // {
  //     path:'*',
  //     Component:
  // }
]);

export default router;

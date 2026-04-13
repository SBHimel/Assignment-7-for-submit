import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import Home from "../pages/home/Home";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Home></Home>
      },
      {
        path: "/timeline",
        element: <Timeline></Timeline>,
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
      },
    ],
    errorElement: <NotFoundPage></NotFoundPage>,
  },
]);

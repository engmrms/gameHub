import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import GameDetails from "./Pages/GameDetails";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "game/:slug",
        element: <GameDetails />,
      },
    ],
  },
]);

export default router;

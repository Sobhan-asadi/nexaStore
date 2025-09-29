import { createBrowserRouter } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage.jsx";
import HomePage, { loader as homeLoder } from "../pages/Home.jsx";
import Layout from "../pages/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage />, loader: homeLoder },
      { path: "details", element: <DetailsPage /> },
    ],
  },
]);

export default router;

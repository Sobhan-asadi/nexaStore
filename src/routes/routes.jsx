import { createBrowserRouter } from "react-router-dom";
import HomePage, { loader as homeLoder } from "../pages/Home.jsx";
import Layout from "../pages/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage />, loader: homeLoder }],
  },
]);

export default router;

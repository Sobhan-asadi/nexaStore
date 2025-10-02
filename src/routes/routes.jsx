import { createBrowserRouter } from "react-router-dom";
import Checkout from "../pages/Checkout.jsx";
import DetailsPage from "../pages/DetailsPage.jsx";
import HomePage, { loader as homeLoder } from "../pages/Home.jsx";
import Layout from "../pages/Layout.jsx";
import ShoppingCart from "../pages/ShoppingCart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage />, loader: homeLoder },
      { path: "details", element: <DetailsPage /> },
      { path: "shoppingCart", element: <ShoppingCart /> },
      { path: "shoppingCart/checkout", element: <Checkout /> },
    ],
  },
]);

export default router;

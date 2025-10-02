import { createBrowserRouter } from "react-router-dom";

import AboutPage from "../pages/AboutPage.jsx";
import Checkout from "../pages/Checkout.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import DetailsPage from "../pages/DetailsPage.jsx";
import HomePage, { loader as homeLoder } from "../pages/Home.jsx";
import Layout from "../pages/Layout.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
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
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

export default router;

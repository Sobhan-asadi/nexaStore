import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Layout = lazy(() => import("../pages/Layout.jsx"));
const HomePage = lazy(() => import("../pages/Home.jsx"));
const DetailsPage = lazy(() => import("../pages/DetailsPage.jsx"));
const ShoppingCart = lazy(() => import("../pages/ShoppingCart.jsx"));
const Checkout = lazy(() => import("../pages/Checkout.jsx"));
const AboutPage = lazy(() => import("../pages/AboutPage.jsx"));
const ContactPage = lazy(() => import("../pages/ContactPage.jsx"));
const RegisterPage = lazy(() => import("../pages/RegisterPage.jsx"));
const LoginPage = lazy(() => import("../pages/LoginPage.jsx"));

import { loader as homeLoader } from "../pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage />, loader: homeLoader },
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

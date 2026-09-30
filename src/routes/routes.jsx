import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import RouteError from "../components/feedback/RouteError";
import homeLoader from "../loaders/homeLoader";
import productDetailsLoader from "../loaders/productDetailsLoader";

const Layout = lazy(() => import("../pages/Layout.jsx"));
const HomePage = lazy(() => import("../pages/Home.jsx"));
const DetailsPage = lazy(() => import("../pages/DetailsPage.jsx"));
const ShoppingCart = lazy(() => import("../pages/ShoppingCart.jsx"));
const Checkout = lazy(() => import("../pages/Checkout.jsx"));
const AboutPage = lazy(() => import("../pages/AboutPage.jsx"));
const ContactPage = lazy(() => import("../pages/ContactPage.jsx"));
const RegisterPage = lazy(() => import("../pages/RegisterPage.jsx"));
const LoginPage = lazy(() => import("../pages/LoginPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "products/:productId",
        element: <DetailsPage />,
        loader: productDetailsLoader,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;

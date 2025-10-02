import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import router from "./routes/routes.jsx";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer position="top-center" autoClose={1500} />
    </>
  );
}

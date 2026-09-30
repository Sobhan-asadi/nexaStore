import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import PageLoading from "./components/feedback/PageLoading";
import router from "./routes/routes.jsx";

export default function App() {
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <RouterProvider router={router} />
      </Suspense>

      <ToastContainer position="top-center" autoClose={1500} />
    </>
  );
}

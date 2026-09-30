import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import NaveBar from "../components/NaveBar";

export default function Layout() {
  return (
    <>
      <NaveBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

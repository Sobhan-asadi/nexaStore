import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NaveBar from "../components/NaveBar";

export default function Layout() {
  return (
    <>
      <header>
        <NaveBar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

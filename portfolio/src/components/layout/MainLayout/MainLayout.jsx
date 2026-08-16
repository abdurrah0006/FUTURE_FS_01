import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CursorGlow from "../../common/CursorGlow/CursorGlow";
import ScrollToTop from "../../common/ScrollToTop/ScrollToTop";

function MainLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <CursorGlow />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
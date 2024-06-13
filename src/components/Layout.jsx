import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
// import Footer from "./Footer";

function Layout() {
  return (
    <div id="FULL_APP">
      <NavBar />
      <main className="layout-div">
        <Outlet></Outlet>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;

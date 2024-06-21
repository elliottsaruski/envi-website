import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar.jsx";

function Layout() {
  return (
    <div id="FULL_APP">
      <NavBar />
      <main className="layout-div">
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default Layout;

import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <NavBar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

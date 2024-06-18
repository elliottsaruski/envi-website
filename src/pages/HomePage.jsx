import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-wrapper">
      <p>ENVI</p>
      <NavLink to="/music">enter</NavLink>
    </div>
  );
}

export default HomePage;

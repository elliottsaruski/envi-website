import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div className="home-wrapper">
      <p>ENVI</p>
      <NavLink to="/home">enter</NavLink>
    </div>
  );
}

export default LandingPage;

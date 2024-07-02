import { NavLink } from "react-router-dom";
import R3FText from "../components/landing-page/R3FText";

function LandingPage() {
  return (
    <div className="landing-page-wrapper">
      <R3FText />
      <NavLink to="/home" id="enter-site-button">
        enter
      </NavLink>
    </div>
  );
}

export default LandingPage;

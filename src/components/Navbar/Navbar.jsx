import React from "react";
import { useLocation, useNavigate } from "react-router";
import SP_ManPowerLogo from "../../assets/images/logos/spmanpower_logo.png";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  function pathMatchRoute(route) {}
  return (
    <div className="headerContainer">
      <header className="headerSection">
        <div>
          <img
            className="logo-image"
            src={SP_ManPowerLogo}
            alt="logo"
            //onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="naviLinks">
            <li
              className={`navlink ${pathMatchRoute("/") && "active-link"}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`navlink ${
                pathMatchRoute("/sign-in") && "active-link"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

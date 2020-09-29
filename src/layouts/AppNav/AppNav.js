import React from "react";
import { Link } from "react-router-dom";

function AppNav(props) {
  return (
    <div>
      <nav id="myNav" class="navbar navbar-expand-lg navbar-light">
        <Link
          style={{ color: "white", background: "transparent", display: "none" }}
          class="navbar-brand"
          to="/"
        >
          {props.appName}
        </Link>
        <a href="#" class="imaginaryLink"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active"></li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Value Chains
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/">
                  Maize
                </Link>
                <Link class="dropdown-item" to="/problems">
                  Beans
                </Link>
                <Link class="dropdown-item" to="/recommendation">
                  Potatoes
                </Link>
              </div>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/poultryManagementSys">
                Maize
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/poultryManagementSys">
                Beans
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/poultryManagementSys">
                Potatoes
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default AppNav;

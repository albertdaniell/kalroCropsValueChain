import React from 'react'
import { Link } from "react-router-dom";
function AppNavKikuyuLinks(props) {
    return (
        <div>
             <nav id="myNav" class="navbar navbar-expand-lg navbar-light">
        <Link
          style={{ color: "white", background: "transparent", display: "none" }}
          class="navbar-brand"
          to={props.to}
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
               LiveStock
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="https://kalro-poultry.web.app/">
                  Nguku
                </a>
                <a class="dropdown-item" href='https://kalro-goats.web.app/'>
                  Dairy Goat
                </a>
                
              </div>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/">
                Mbembe
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/beansLanding">
                Mboco
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/potatoLanding">
                Waru
              </Link>
            </li>
          </ul>
        </div>
      </nav> 
        </div>
    )
}

export default AppNavKikuyuLinks

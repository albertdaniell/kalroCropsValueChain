import React from "react";
import {
 
  Link, 
} from "react-router-dom";

function AppNavKik() {
  return (
    <div>
      <nav id="myNav" class="navbar navbar-expand-lg navbar-light">
        < Link style={{color:'white',background:'transparent',display:'none'}}  class="navbar-brand" to="/">
          Poultry App
        </ Link>
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
            <li class="nav-item active">
            
            </li>


            <li class="nav-item dropdown">
              <a  
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Kianjiriria

              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                
              <Link class="dropdown-item" to="/">
              Kianjiriria

                </Link>
                <Link class="dropdown-item" to="/problems">
                MATHINA MARIA MAHUTANITIE NA URIMI WA NGUKU/

                </Link>
                <Link class="dropdown-item" to="/recommendation">
                MAUNDU MA BATA NIUNDU WA UGACIRU URIMI INI WA NGUKU

                </Link>
             
              </div>
            </li>

       

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                  Mithemba ya Nguku
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link  class="dropdown-item" to="/poultryBreeds">
                MITHEMBA YA NYONI

                </Link>
                <Link  class="dropdown-item" to="/otherimproved">
                MITHEMBA INGI MIEGA YA NGUKU CIA KIENYEJI NI

                </Link>
              </div>
            </li>

            <li class="nav-item dropdown">
              < Link 
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                    KIAGA NA MUTHONDEKERE
              </ Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
           
                < Link  class="dropdown-item" to="/poultryHousing">
                KIAGA NA MUTHONDEKERE WA KIO

                </ Link>
                < Link  class="dropdown-item" to="/poultryHouse">
                KIUMBA KIA NGUKU CIA MATUMBI 100 ...

                </ Link>

                < Link  class="dropdown-item" to="raisedPoultry"> KIUMBA KIOE IGURU/KIUMBA ...</ Link>
                < Link  class="dropdown-item" to="feedingWatering"> MUBANGIRE WA INYUIRO NA MIHARATI
  ...</ Link>
              </div>
            </li>


           
           
            <li class="nav-item">
              < Link  class="nav-link" to="/poultryManagementSys">
              MITARATARA YA MIBANGO YA URIMI WA NGUKU.

              </ Link>
            </li>

         

            <li class="nav-item dropdown">
              < Link 
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                   UBACIRIRU WA NGUKU
              </ Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                
                < Link  class="dropdown-item" to="/brooding">
                GUKOMERERIA

                </ Link>
                < Link  class="dropdown-item" to="/broodingProcess">
                MUTARATARA WA GUKOMERERIAX`

                </ Link>

                < Link  class="dropdown-item" to="broodingManagement"> UMENYERERI WA IKOMERERIA
</ Link>
              </div>
            </li>

            <li class="nav-item dropdown">
              < Link 
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                  IRIO CIA NGUKU

              </ Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                < Link  class="dropdown-item" to="/poultryNutrition">
                IRIO CIA NGUKU, MIRIRE NA UHEI WA IRIO

                </ Link>
                < Link  class="dropdown-item" to="/commonSources">
                KIHUMO KIA IRIO CIA HINYA IRIO-INI CIA NGUKU
                </ Link>
             

              </div>
            </li>
            <li class="nav-item dropdown" id="other-link-dropdown">
              < Link 
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Other Links
              </ Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                < Link  class="dropdown-item" to="#">
                Poultry Feeds & Feeding
                </ Link>

                  <li class="nav-item dropdown">
              < Link 
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                   Poultry Nutrients
              </ Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                < Link  class="dropdown-item" to="/poultryNutrition">
                Poultry Nutrients
                </ Link>
                < Link  class="dropdown-item" to="/commonSources">
               Common Sources of nutrients
                </ Link>
             

              </div>
            </li>
                < Link  class="dropdown-item" to="#">
                Poultry Health Management
                </ Link>
                <div id="childLinks">
          <Link class="dropdown-item" to="/poultryHealth">
            UMERERI WA UGIMA WA NGUKU
          </Link>
          <Link class="dropdown-item" to="/commonDiseases">
            MIRIMU
          </Link>
          <Link class="dropdown-item" to="/diseasePrevention">
            UGITIRI KUUMANA NA MIRIMU
          </Link>
          <Link class="dropdown-item" to="/vaccination">
            UHEI WA NDAWA WA NGUKU CIA MATUMBI
          </Link>

          <Link class="dropdown-item" to="/vaccinationProgram">
            Uhei wa ndawa kwi nguku cia nyama
          </Link>
          <Link class="dropdown-item" to="/vices">
            MITUGO MIURU IKORAGWO URIMI-INI WA NGUKU
          </Link>
          < Link  class="dropdown-item" to="/otherCausesLoss">
          ITUMI INGI IREHAGA UNYIHU WA NGUKU

                </ Link>
        </div>
                < Link  class="dropdown-item" to="/poultryBiosecurity">
                Poultry Bio-security
                </ Link>
                < Link  class="dropdown-item" to="#">
                Local Poultry Improvement
                </ Link>
                < Link  class="dropdown-item" to="#">
                UTHONDEKI WA IRIO 
                </ Link>
                < Link  class="dropdown-item" to="#">
                Key actors in the poultry value chain 14
                </ Link>
                <div class="dropdown-divider"></div>
                < Link  class="dropdown-item" to="#">
                  Something else here
                </ Link>
              </div>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default AppNavKik;

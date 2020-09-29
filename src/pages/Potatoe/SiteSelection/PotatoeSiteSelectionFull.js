import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoeSiteSelectionFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Site selection</h5>
                        <hr></hr>
                        <h6>Altitude range</h6>
          Potatoes require altitudes of 1500 – 3000 masl

          <h6>Soil type and conditions</h6>
                        <ul>
                            <li>Soils should be deep minimum 30 cm, well-drained, fertile, medium loam, preferably gentle sloping land, on mild slopes, ridges should more or less follow the contour with a small longitudinal slope to allow for drainage</li>
                            <li>The pH should be 5.5 – 7.5, high soil pH causes scab disease and liming is recommended before planting if pH is below that range. Potato nutrient requirements include: N, P, K, Mg, Ca, S, Zn, Cu, Mn, B</li>
                        </ul>

                        <h6>Temperature range</h6>
          The temperatures should be 20-25oC

          <h6>Rainfall</h6>
          The rainfall should be more than 750 mm p.a.
          </p>
                </AppLeftSideContainer>
                <AppRightSideContainer>
                   <PotatoSideMenu></PotatoSideMenu>
                </AppRightSideContainer>
            </AppContainer>
        </div>
    );
}

export default PotatoeSiteSelectionFull;

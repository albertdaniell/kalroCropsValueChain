import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoeHarvestingPrev from "../Harvesting/PotatoeHarvestingPrev";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoeMaturityFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Maturity </h5>
                        <hr></hr>
                        Potatoes mature 90-120 days after planting depending on variety



                        <ul>
                            <li>
                            Drying leaves is an indicator of maturity.
                            </li>
                                  </ul>
                            <PotatoeHarvestingPrev></PotatoeHarvestingPrev>
          </p>
                </AppLeftSideContainer>
                <AppRightSideContainer>
                   <PotatoSideMenu></PotatoSideMenu>
                </AppRightSideContainer>
            </AppContainer>
        </div>
    );
}

export default PotatoeMaturityFull

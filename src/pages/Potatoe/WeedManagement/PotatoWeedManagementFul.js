import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import PotatoeSoilFertilityPrev from "../SoilFertility/PotatoeSoilFertilityPrev";
import PotatoeSoilFertilityPrevKik from "../SoilFertility/PotatoeSoilFertilityPrevKik";

function PotatoWeedManagementFul() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Weed management</h5>
                        <hr></hr>
                        Weeding should be done 2 weeks and 5 weeks after emergence                     
                        <ul>
                            <li>Weeding should be done 2 weeks and 5 weeks after emergence</li>
                                  </ul>
                            <PotatoeSoilFertilityPrevKik/>
          </p>
                </AppLeftSideContainer>
                <AppRightSideContainer>
                   <PotatoSideMenu></PotatoSideMenu>
                </AppRightSideContainer>
            </AppContainer>
        </div>
    );
}

export default PotatoWeedManagementFul

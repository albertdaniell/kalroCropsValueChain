import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import PotatoeWeedManagementPrev from "../WeedManagement/PotatoeWeedManagementPrev";

function PotatoeWaterManagementFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Water management</h5>
                        <hr></hr>
                        Ensure water is applied immediately after planting, at flowering, at tuber formation and at expansion 
                     
                        <ul>
                            <li>Minimal water is required during normal vegetative growth of the crop</li>
                            <li>Irrigate during dry spell without over watering that leads to build-up of fungal diseases and poor aeration</li>
                            <li>Avoid irregular watering for it causes splitting of the tuber</li>
                                  </ul>
                         <PotatoeWeedManagementPrev></PotatoeWeedManagementPrev>   
          </p>
                </AppLeftSideContainer>
                <AppRightSideContainer>
                   <PotatoSideMenu></PotatoSideMenu>
                </AppRightSideContainer>
            </AppContainer>
        </div>
    );
}

export default PotatoeWaterManagementFull

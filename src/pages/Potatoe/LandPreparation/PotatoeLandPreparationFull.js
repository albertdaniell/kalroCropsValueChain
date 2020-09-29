import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import PotatoePrePlantingPrev from "../PrePlanting/PotatoePrePlantingPrev";

function PotatoeLandPreparationFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Land preparation</h5>
                        <hr></hr>
                        Land preparation should depend on tuber use for consumption or seed
                        <h6>Steps during land preparation</h6>
                        <ul>
                            <li>Plough when soil is dry</li>
                            <li>Plough the farm to appropriate tilth 45cm-50cm deep</li>
                            <li>
                            Add manure and fertilizers to the soil in the right amounts to provide the required plant nutrients for vigorous crop growth
                            </li>
                             </ul>
                             <PotatoePrePlantingPrev></PotatoePrePlantingPrev>

          </p>
                </AppLeftSideContainer>
                <AppRightSideContainer>
                   <PotatoSideMenu></PotatoSideMenu>
                </AppRightSideContainer>
            </AppContainer>
        </div>
    );
}

export default PotatoeLandPreparationFull;

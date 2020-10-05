import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoePestManagementPrev from "../PestManagement/PotatoePestManagementPrev";
import PotatoePestManagementPrevKik from "../PestManagement/PotatoePestManagementPrevKik";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoeCropsManagementFullKik() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Utungati wa mumera</h5>
                        <hr></hr>
                        Thikirira waru
Ugarurania wa mimera

                        <ul>
                         <li>
                         Garuragira mimera thutha wa miaka 4 na mimera
                         </li>
                         <li>
                         ingi ta waru, no urime muhiriga wa irio
nyumu ta mithemba ya mboco niguo kuhukia
mirimu ya waru na guthondeka unoru wa waru.

                         </li>
                                  </ul>
                            <PotatoePestManagementPrevKik></PotatoePestManagementPrevKik>
          </p>
                </AppLeftSideContainer>
                <AppRightSideContainer>
                   <PotatoSideMenu></PotatoSideMenu>
                </AppRightSideContainer>
            </AppContainer>
        </div>
    );
}

export default PotatoeCropsManagementFullKik

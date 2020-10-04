import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import PotatoePrePlantingPrev from "../PrePlanting/PotatoePrePlantingPrev";

function PotatoeLandPreparationFullKik() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Kuhariria mugunda</h5>
                        <hr></hr>
                        Uhariria wa mugunda
uringanaga na mbegu iria
irahandwo,
                        <h6>Makinya makurumirirwo ukirima</h6>
                        <ul>
                            <li>urime riria tiri wi mumu</li>
                            <li>Urime urikiitie ta uriku wa 45cm-50cm</li>
                            <li>
                            Ongera thumu na  githimi
kiega. Niguo kuongerera mumera irio
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

export default PotatoeLandPreparationFullKik;

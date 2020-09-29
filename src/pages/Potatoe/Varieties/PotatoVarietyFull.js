import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoePlantingPrev from "../Planting/PotatoePlantingPrev";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoVarietyFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Varieties</h5>
                        <hr></hr>
                        Choice of variety depends on the locality, consumer and market preference. Disease and pest resistance may also dictate the varieties to be grown
                        <h6>Varieties include</h6>
                        <ul>
                        <li>General: Kenya Baraka, Roslin tana, Roslin Gucha, Kerrs Pink, Roslin Eburu (B 53), Desiree, Feldeslohm, Kenya Dhamana, Chaguo, Furaha, Romano, Dutch Robin, Shangi, Pumpernet
</li>
<li>
Current: Tigoni, Asante, Kenya Karibu, Kenya Mpya, Kenya Sherekea, Shangi, Arka, Kabale from Uganda
</li>
<li>
Imported varieties: Jelly, Karuso, Connect
</li>
<li>
Others: Unica, Primera, Rudolf
</li>
                           
                             </ul>
                             <PotatoePlantingPrev></PotatoePlantingPrev>
                            
          </p>
                </AppLeftSideContainer>
                <AppRightSideContainer>
                   <PotatoSideMenu></PotatoSideMenu>
                </AppRightSideContainer>
            </AppContainer>
        </div>
    );
}

export default PotatoVarietyFull

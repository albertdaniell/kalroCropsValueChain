import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import PotatoeWaterManagementPrev from "../WaterManagement/PotatoeWaterManagementPrev";
import PotatoeWaterManagementPrevKik from "../WaterManagement/PotatoeWaterManagementPrevKik";

function PotatoePlantingFullKik() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>kuhanda</h5>
            <hr></hr>
            Kuhanda tene mbere ya mbura yurite, mbegu hitukie na ihandwo
            mitaroini na inanguha 4-5
            <h6>Mutaratara wa uhandi</h6>
            <ul>
              <li>Uhande uriku wa 5-15 cm and 30-40cm kwi mbegu njeru</li>
              <li>Uhande waru nguha irore iguru</li>
              <li>
                uraihu 75cm x 30 cm kuma mutaro nginya uria ungi na 30-40 cm
                kuma mbegu nginya iria ngi onsumption purposes, plant at a
                spacing of 75cm x 30 cm between rows and 30-40 cm within rows
              </li>
              <li>
                Muigana wa mbegu ni 2-2.5 tani o acre Kuringanaga na unoru wa
                tiri , mbura na uhuthiri wa waru
              </li>
              <li>O uria mbegu indungu no ibataranagia nyingi</li>
              <li>
                Thondeka mirarwo mitaganu ongikorwo niukurimaniria na indo ingi
                ta mbembe kana mboco
              </li>
              <li>
                Handa na utiganu 15- 20cm kuma mutaro nginya uria ungi, uhande
                kilo 50 kwa acre
              </li>
            </ul>
            <PotatoeWaterManagementPrevKik/>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <PotatoSideMenu></PotatoSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoePlantingFullKik;

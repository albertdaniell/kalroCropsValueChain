import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import PlantingPrev from "../Planting/PlantingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WaterManagementPrev from "../WaterManagement/WaterManagementPrev";

function PlantingFullKik() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kuhanda</h5>
            <hr></hr>
            <ul>
              <li>
              Handa mbura ikiambirira kuringa, utigithukanitie  muigana wa 75cm x 25 or 30cm, mbegu 1na uriku wa  5 cm               </li>
              <li>Handa mbura yambirira  ta thiku 4 nigetha mumera ugucie riera ria mimera . </li>
              <li>Ngeria mbegu kana ni ikumera mbere ya kuhanda </li>
              <li>
              Handa riria tiri wi muigu na uhande mbembe njitikirie ni thirikari e.g. Ua 
Kayongo 
              </li>
              <li>
              Githimi kia: 75cm x 25 or 30cm, mbegu 1 irima, uriku wa 5 cm na githimi kia 2.5-5 cm hari mbegu nide. 
              </li>
              
              <li>
              Ihuria mathenya thutha wa kiumia kimwe kuri mbegu citamerire.
              </li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <WaterManagementPrev></WaterManagementPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PlantingFullKik;

import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import DiseaseManagementPrev from "../DiseaseManagement/DiseaseManagementPrev";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import MaturityPrev from "../Maturity/MaturityPrev";
import PlantingPrev from "../Planting/PlantingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import ProcessingPrev from "../Processing/ProcessingPrev";
import ProcessingPrevKik from "../Processing/ProcessingPrevKik";
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import StoragePrev from "../Storage/StoragePrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";

function PostHarvestingFullKik() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Thutha wa kugetha   </h5>
            <hr></hr>
         
            Kua mbembe kuma mugunda kinya ha guthaduririra ugitumire indo theru.
            <ul>
  <li>
  Geria kumeya uigu wariera ria kumuthia bembe uria ungitumira
Angikorwo mbembe cina dawa ya tutambi , ciigwo ikunia ria makongo kana (jute bags) handu iguru niundu wa kugiriria mbia na ngara
  </li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
     <ProcessingPrevKik></ProcessingPrevKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PostHarvestingFullKik

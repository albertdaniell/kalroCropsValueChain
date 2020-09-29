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
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import StoragePrev from "../Storage/StoragePrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";

function StorageFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Storage</h5>
            <hr></hr>
         
            Store in airtight bags or metallic silos and minimize use of pesticides

            <ul>
                <li>Transport maize from the field to the place of shelling using clean transport equipment</li>
                <li>Dry before shelling</li>
                <li>Winnow to remove dust and chaff</li>
                <li>Control weevils and grain borers by drying the maize to 13-14% moisture content to avoid grain attack by fungal infections such as aflatoxin</li>
      
            </ul>
          </p>

          <p>
            <h6>Next</h6>
     <ProcessingPrev></ProcessingPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default StorageFull;

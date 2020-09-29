import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import DiseaseManagementPrev from "../DiseaseManagement/DiseaseManagementPrev";
import HarvestingPrev from "../Harvesting/HarvestingPrev";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import MaturityPrev from "../Maturity/MaturityPrev";
import PlantingPrev from "../Planting/PlantingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";

function MaturityFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Maturity</h5>
            <hr></hr>
         
            Maize is mature 4 to 9 months after planting depending on the variety and altitude. 

<br></br>
Maize is mature 4 to 9 months after planting depending on the variety and altitude. 


          </p>

          <p>
            <h6>Next</h6>
    <HarvestingPrev></HarvestingPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default MaturityFull;

import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import DiseaseManagementPrev from "../DiseaseManagement/DiseaseManagementPrev";
import HarvestingPrev from "../Harvesting/HarvestingPrev";
import HarvestingPrevKik from "../Harvesting/HarvestingPrevKik";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import MaturityPrev from "../Maturity/MaturityPrev";
import PlantingPrev from "../Planting/PlantingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";

function MaturityFullKik() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Gukura</h5>
            <hr></hr>
         
            Mbembe ikura na ihinda rai 4 ngiya 9 thutha wa kunda kuringana na muthemba na kuria irakura  
 
 
<br></br>
Mbembe ikura na ihinda rai 4 ngiya 9 thutha wa kunda kuringana na muthemba na kuria irakura  
 
 

          </p>

          <p>
            <h6>Next</h6>
    <HarvestingPrevKik></HarvestingPrevKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default MaturityFullKik;

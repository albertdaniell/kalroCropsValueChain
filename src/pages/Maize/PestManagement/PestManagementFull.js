import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import DiseaseManagementPrev from "../DiseaseManagement/DiseaseManagementPrev";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import PlantingPrev from "../Planting/PlantingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";

function PestManagementFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Pests Management</h5>
            <hr></hr>
         
            Pests include, Fall Armyworm, Armyworm, Maize stalk borer, Termites, Cutworms, Leaf miner, Moths, Beetles, Thrips, Grasshopper, Rodents, Weevils and Larger grain borer

            <h6>Pests include</h6>
            Fall Armyworm (Spodoptera frugiperda), Armyworm (Spodoptera exempta), Maize stalk borer (Busseola fusca), Termites, Cutworms, Leaf miner, Moths, Beetles, Thrips, Grasshopper, Rodents (rats and mice), Weevils (Sytophylus zeameis) and Larger grain borer (Prostephanus truncatus).


            <h6>Pests include</h6>

            <ul>
                <li>Field sanitation and store hygiene</li>
                <li>Plant and harvest early</li>
                <li>Rogueing</li>
                <li>Crop rotation</li>
                <li>Push-pull technology and use of natural enemies</li>
                <li>Rat traps</li>
                <li>Use of appropriate insecticides as recommended by experts </li>

            </ul>
          </p>

          <p>
            <h6>Next</h6>
      <DiseaseManagementPrev></DiseaseManagementPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PestManagementFull;

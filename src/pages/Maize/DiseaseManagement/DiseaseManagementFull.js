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
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";

function DiseaseManagementFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Disease Management</h5>
            <hr></hr>
         
            Diseases include; Head smut, Smut, Maize lethal necrosis disease (MLND), Maize streak virus, Northern leaf blight, Common rust, Grey leaf spot


            <h6>Diseases include; </h6>
            Head smut (Sphacelotheca reiliana), Smut (Ustilago maydis), Maize lethal necrosis disease (MLND), Maize streak virus; Northern leaf blight, Common rust, Grey leaf spot

            <h6>Control of diseases</h6>

            <ul>
                <li>Use of certified clean seed resistant or tolerant varieties</li>
                <li>Crop rotation</li>
                <li>Field hygiene</li>
                <li>Crop rotation</li>
                <li>Vector control e.g. aphids</li>
                <li>Use of appropriate fungicides as recommended by experts </li>
           

            </ul>
          </p>

          <p>
            <h6>Next</h6>
      <MaturityPrev></MaturityPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default DiseaseManagementFull;

import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import CropsManagementPrev from "../CropsManagement/CropsManagementPrev";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import PestManagementPrev from "../PestManagement/PestManagementPrev";
import PlantingPrev from "../Planting/PlantingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";

function CropManagementFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Crop management</h5>
            <hr></hr>
            Top dress at knee height, irrigate if necessary, control weeds
            timely and intercrop with fodder such as Desmodium uncinatum
            <ul>
              <li>
              Thinning, remove weak plants under moist soil conditions 14 days
              after emergence{" "}
              </li>
              <li>
                Apply IPM principles for increased use of biophysical methods
                and reduced use of agrochemical methods{" "}
              </li>
              <li>
                Intercrop maize with desmodium fodder (Desmodium uncinatum)
                push-pull technology to trigger suicidal germination of Striga
              </li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <PestManagementPrev></PestManagementPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default CropManagementFull;

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

function PlantingFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Planting</h5>
            <hr></hr>
            <ul>
              <li>
                Plant at the onset of rains e.g. 4 continuous days of sufficient
                rain – to take advantage of nitrogen flush
              </li>
              <li>Plant along the contours or across the slope</li>
              <li>Conduct germination test before planting </li>
              <li>
                Plant when the soil is moist and plant certified maize varieties
                tolerant to striga weed IR- Coated Maize Varieties e.g. Ua
                Kayongo
              </li>
              <li>
                Maize pure stand: 75cm x 25 or 30cm, 1 seed per hole, 5 cm deep
                and 2.5-5 cm for moist planting
              </li>
              
              <li>
                Fill gaps one to two weeks after planting when plants have
                emerged
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

export default PlantingFull;

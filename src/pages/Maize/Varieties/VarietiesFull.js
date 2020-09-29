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

function VarietiesFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Varieties</h5>
            <hr></hr>
            Best variety and quality seed can be acquired through KEPHIS USSD service or Seed Sector Platform Kenya or from certified agro-dealers 
            <h6>Recommended varieties</h6>
            Select seeds that are adapted to the agroecological zones and soil types, High Altitude, Medium altitude, Low altitude, special trait varieties e.g. Striga tolerant varieties and Open Pollinated Varieties (OPVs) 
          </p>

          <p>
            <h6>Next</h6>
            <PlantingPrev></PlantingPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default VarietiesFull;

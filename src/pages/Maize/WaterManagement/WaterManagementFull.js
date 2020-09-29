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
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";

function WaterManagementFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Water Management</h5>
            <hr></hr>
            Best variety and quality seed can be acquired through KEPHIS USSD
            service or Seed Sector Platform Kenya or from certified agro-dealers
            <ul>
              <li>
                Maize is rain fed and irrigated if necessary, by adopting more
                efficient micro-irrigation methods such as drip
              </li>
              <li>
                Irrigating the fields early in the morning, late in the evening
                or at night but never during full sunshine
              </li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <WeedManagementPrev></WeedManagementPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default WaterManagementFull;

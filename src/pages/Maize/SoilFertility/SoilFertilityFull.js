import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import CropsManagementPrev from "../CropsManagement/CropsManagementPrev";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import PlantingPrev from "../Planting/PlantingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";

function SoilFertiltyFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Soil Fertility</h5>
            <hr></hr>
            Apply only deficient nutrients and conservation farming approaches

            <ul>
              Maintain soil health for good production and income{" "}
              <li>
                Test soils first to guide application of manure and fertilizer{" "}
              </li>
              <li>
                Practice conservation farming approaches, minimum soil
                disturbance, permanent soil cover, crop rotation and soil
                conservation measures{" "}
              </li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <CropsManagementPrev></CropsManagementPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default SoilFertiltyFull;

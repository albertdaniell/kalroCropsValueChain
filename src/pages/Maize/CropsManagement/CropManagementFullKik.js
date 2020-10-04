import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import CropsManagementPrev from "../CropsManagement/CropsManagementPrev";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import PestManagementPrev from "../PestManagement/PestManagementPrev";
import PestManagementPrevKik from "../PestManagement/PestManagementPrevKik";
import PlantingPrev from "../Planting/PlantingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";

function CropManagementFullKik() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>                Umenyereri wa mumea </h5>
            <hr></hr>
            Ongerera fertilizer ciakinya maruini (knee level), itiriria mai kungihoteka, Giriria tutambi na gutukania na mimera ta Desmodium uncinatum

            <ul>
              <li>
              (Thinning), munya mumea uria utari na hinya thutha  thiku 14 thuta wa kuongerera fertilizer
              </li>
              <li>
              Huthira mitaratara ya unduire handu-ini ha dawa cia mimera
              </li>
              <li>
              Tukania mbebe na  muthemba wa mahuti niundu wa kumenyerera mbegu ndikaroote irege kumera.
              </li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <PestManagementPrevKik></PestManagementPrevKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default CropManagementFullKik;

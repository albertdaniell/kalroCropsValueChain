import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import CropsManagementPrev from "../CropsManagement/CropsManagementPrev";
import CropsManagementPrevKik from "../CropsManagement/CropsManagementPrevKik";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import PlantingPrev from "../Planting/PlantingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";

function SoilFertiltyFullKik() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Unoru wa tiiri </h5>
            <hr></hr>
            Ongerera nutrients iria irag tiiri ini na ugerie urimi wina umenyeri wa tiiri
 
            <ul>
             <li> Menyerera ugima mwega wa tiiri niundu wa magetha maingi</li>
              <li>
              Ika uthuthuria wa tiiri mbere ya guikira thumu
              </li>
              <li>
              Rima rimi wina umenyeri wa tiiri , utekugiurania tiiri muno, kuhubira tiiri, gucenjania mimea na umenyerere tiiri muno
              </li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <CropsManagementPrevKik></CropsManagementPrevKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default SoilFertiltyFullKik;

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
import WeedManagementPrevKik from "./WeedManagementPrevKik";

function WaterManagementFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>kurimira </h5>
            <hr></hr>
            Irimira ria mbere ni thutha wa ciumia 3-4 thutha wa kumera, na irimira ria keeri (2nd weeding) ni mbeere ya kuongerera fertilizer (top dressing) 
 
            <ul>
              <li>
              (Irima ria mbere) Ongerera thumu mumea ini wa mbebe riambere ciina uraihu wa 30-45 cm kana ciagukinya maru-ini
              </li>
              <li>
              2nd topdressing ongerera riakeri riria mbembe ciahira kana riria ciraruta mwithuka na tiiri ukorwo na uhehu kana mai ma kuigana 
 
              </li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <WeedManagementPrevKik></WeedManagementPrevKik>
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

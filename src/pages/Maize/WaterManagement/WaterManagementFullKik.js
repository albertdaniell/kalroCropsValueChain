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
import WeedManagementPrevKik from "../WeedManagement/WeedManagementPrevKik";

function WaterManagementFullKik() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kumenyerera mai</h5>
            <hr></hr>
            Geria gutega mai nakuiga mai ma tiiri, kuiga mulching na gwikira thumu kugiriria mai kuura 
            <ul>
              <li>
              Mbebe itumagira mai ma mbura kana guitirira mai kugihoteka, kuthira drip irrigation niundu wa kumenyerera mai
              </li>
              <li>
              Itiriria mai kiroko tene, mathaa ma huani kana utuku no ti mutheya riria kwina riua ihuu
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

export default WaterManagementFullKik;

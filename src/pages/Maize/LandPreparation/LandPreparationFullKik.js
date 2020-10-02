import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import PrePlantingPrevKik from "../PrePlanting/PrePlantingPrevKik";

function LandPreparationFullKik() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kuhariria mugunda</h5>
            <hr></hr>
            Add ikira thumu na fertilizer kuringana na mutaramu wa tiiri
            <h6>Makinya ma kuhariria</h6>
            <ul>
              <li>
              Menyerera kurima niundu wa kunyihia thogora na kumenyerera tiiri, mai na  unoru na unyihie wira.
              </li>
              <li>
              Tuguta na uhande ugitumira indo iria ciagiriire e.g. rippers, jab planters, dibbler, oxen drawn equipment e.g. the ripper, tractor drawn no till planter
              </li>
              <li>
              Tema mitaro ugitumira . theci, macembe kana ng’ombe cia kurima
              </li>
              <li>Urimi wa mihari niguo wendekaine</li>
              <li>
              Ikira thumu na fertilizers na githimi kiiganu nigetha mumera ukore unoru na uhote gukura wina hiya.
              </li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <PrePlantingPrevKik></PrePlantingPrevKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default LandPreparationFullKik;

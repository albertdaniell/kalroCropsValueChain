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
            <h5>Mithemba</h5>
            <hr></hr>
            Muthemba uria mwenga wa mbegua umagagwa KEPHIS USSD service kana Seed Sector Platform Kenya or from Kana mugirigaca muhitukie
               
            <h6>Mithemba iria yagiriire</h6>
            Mithemba iria yagiriire Thuura mbembe kuringana na kuria ikurga na muthemba wa tiiri, kuria kuri urugari muingi, wagatagati – ini kana kuria kuhehu e.g. mithemba iria itiiragia mirimu na tutambi na iria mathuuro ma guchokio mugunda  
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

import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPrePlanting from "../PrePlanting/BeansPrePlanting";
import BeansPrePlantingKik from "../PrePlanting/BeansPrePlantingKik";

function BeansLandPreparationFullKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kuhariria mugunda  </h5>
            <hr></hr>
            Ndukarime muno niundu wa kunyihia thogora na kumenyerera tiiri, mai na  unoru na unyihie wira. 

            <h6>Makinya ma kuhariria</h6>
            <ul>
              <li>
              Tuguta na uhande ugitumira indo cia urimi iria ciagiriire
              </li>
              <li>
              Thondeka mitaro ugitumira theci kana icembe niundu wa kuhuthia tiiri
              </li>
              <li>Mitaro ni yagiriire</li>
              <li>Ikira thumu  na fertilizers tiiri ini na githimi kiria kiagiriire kuhe mumera irio cia kuigana gukura wega na ihenya</li>
              <li>
              Menyerera ugima mwega wa tiiri niguo ukoona maciaro mega
              </li>
              <li>Ikira thumu uria utari tiiri ini waku</li>
              <li>
              Geria urimi wa umenyereri niguo ndugathumbure tiiri uno, ndukahumburio tiiri muno (soil cover), cenjania mimera na imera(crop rotation), na umenyerere tiiri
              </li>
             
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansPrePlantingKik></BeansPrePlantingKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer> 
    </div>
  );
}

export default BeansLandPreparationFullKik;

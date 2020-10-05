import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoeLandPreparationPrev from "../LandPreparation/PotatoeLandPreparationPrev";
import PotatoeLandPreparationPrevKik from "../LandPreparation/PotatoeLandPreparationPrevKik";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoeSiteSelectionFullKik() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Gucagura handu ha</h5>
            Thura handu hatari hahadwo waru kahinda-ini ta ka miaka ina
            <hr></hr>
            <h6>Uraihu uria ubaranitie</h6>
            Waru wendaga uraihu wa riera wa mita 1500 – 3000
            <h6>Muthemba wa tiri</h6>
            <ul>
              <li>
                Tiri ukorwo wi muriku uraihu wa 30cm,ni urate mai wega, ni
                Munoru, na
              </li>
              <li>
                Mugunda muinamu hanini,na kuria kuinamu muno, mitaro ithondekwo
                ya kunyita mai na gutuma kwage kuinama muno, ururu wa tiri
                uthimini wa pH ukorwo wi 5.5 – 7.5, ururu muingi wa tiri ni
                utumaga mirimu iingihe kwogwo coko niuuhuthikaga kunyihia ururu
                wa tari. Waru niubataraga indo ta: N, P, K, Mg, Ca, S, Zn, Cu,
                Mn, B
              </li>
            </ul>
            <h6>TUrugari</h6>
            Urugari ubataranagia 20-25oC
            <h6>mbura</h6>
            mbura ndigakire githimo kia 750 mm o mwaka{" "}
            <PotatoeLandPreparationPrevKik></PotatoeLandPreparationPrevKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <PotatoSideMenu></PotatoSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoeSiteSelectionFullKik;

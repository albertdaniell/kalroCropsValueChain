import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import PotatoeProcessingPrep from "../Processing/PotatoeProcessingPrep";

function PotatoePostHarvestingFullKik() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Post-harvest handling </h5>
            <hr></hr>
            Gitira waru kuma na riua rihiu niguo kugiririria waru kuhoha na
            gucejia rangi. theria,
            <br></br>
            thuuarania na utigithukanie mutungu na muceke thutha kugetha.
            <ul>
              <li>Theria waru na kuruta tiri uria winyitiriire</li>
              <li>Kwaga kuihuria makunia muno hindi ya ukui</li>
              <li>Thurania waru iria thece ukigetha, iria thuku na</li>
              <li>iria thece ni tutambi.</li>
              <li>
                Chagurania waru kuringana na uritu wacio, unene wacio, rangi na
                kuringana na thoko. Waru ciikagirwo makunia, iriti kana ndoo
                kurigana na ukui uria irakuo na cio. Waru ibangagwo makuniaini
                ma uritu wa kilo 50 kana thi wa kilo 50
              </li>
            </ul>
            <PotatoeProcessingPrep></PotatoeProcessingPrep>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <PotatoSideMenu></PotatoSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoePostHarvestingFullKik;

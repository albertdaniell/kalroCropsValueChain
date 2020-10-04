import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import Next from "../../../layouts/Next/Next";

import MaizeHeader from "../MaizeHeader/MaizeHeader";


function ProcessingFullKik() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Mutatara wa muigire  </h5>
            <hr></hr>
         
            Gitira mbuca, kuguma (aflatoxin) na igunyo ukiumithia na urugari wina mai ma (13-14% moisture)
 <br>
</br>
Thuura mbebe iria njoru, iria cina rangi na iria ndure, Inga bembe ciaku na ikunia ritairingiria riera(airtight bags) kana ikumbu ria mabati(metallic silos) na uhinyihie kuhithira dawa cia tutambi
          </p>

          <p>
          <Next pageToGo='Beans' to='/beansLanding'></Next>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default ProcessingFullKik;

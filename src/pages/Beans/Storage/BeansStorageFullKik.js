import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import Next from "../../../layouts/Next/Next";
import BeansHeader from "../BeansHeader/BeansHeader";


function BeansStorageFullKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>                muigire
 </h5>
            <hr></hr>
            Iga mboco ciaku na ikunia ritangiingiria riera(airtight bags) kana ikumbu ria mabati(metallic silos) nigetha unyihie kuhuthira dawa cia tutambi
                <br></br>
                Tumira dawa ya tutambi
        
            <ul>
   <li>
   Huthira dawa ya tutambi kugiririria mboco ciaku na uhote guciiga wega, iga mboco ciaku na ikunia ritangiingiria riera handu iguru kurigiriria mboco kuri mbia na ngara
   </li>
            </ul>
          </p>

          <p>
            <Next pageToGo="Potatoes" to='/potatoLanding'></Next>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}
export default BeansStorageFullKik

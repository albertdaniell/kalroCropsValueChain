import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansCropsManagementPrev from "../CropsManagement/BeansCropsManagementPrev";
import BeansCropsManagementPrevKik from "../CropsManagement/BeansCropsManagementPrevKik";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPlanting from "../Planting/BeansPlanting";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";



function BeansSoilFertilityFullKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Unoru wa tiiri  </h5>
            <hr></hr>
            Ongerera thumu kuringana na githimi gia tiiri waku 
         
          <ul>
 <li>
 Ikira thumu na githimi kiria uhetwo nigetha mumera ugie na irio cia kuigana na ukure na hinya
 </li>
 <li>
 Ikira thumu kurigana na githimi gia tiiri waku na kuogerera thumu kuringana na githimi kia ururu wa tiiri waku  (Use only non-acidifying fertilizers )
 </li>
 <li>
 Mbocho ndiagiriirwo ni kurimirwo ni undu niiri uhoti wa kwiyethera irio cia mimera.
 </li>
 <li>
 Ongererathumu riria he bata kana kwina unyihu na ni githimi kiria kiagiriire.
 </li>
          </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansCropsManagementPrevKik></BeansCropsManagementPrevKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansSoilFertilityFullKik

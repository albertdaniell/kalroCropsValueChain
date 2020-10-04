import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPlanting from "../Planting/BeansPlanting";
import BeansSoilFertility from "../SoilFertility/BeansSoilFertility";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";
import BeansWeedManagement from "../WeedManagement/BeansWeedManagement";
import BeansWeedManagementKik from "../WeedManagement/BeansWeedManagementKik";



function BeansWaterManagementFullKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Umenyereri wa mai </h5>
            <hr></hr>
            Itiriria mai riri marendekana na urimire kahinda gwa kahinda
 

         
          <ul>
    <li>Itiriria mai haria mabatie mboco ihuthire</li>
    <li>Maai ma miberethi ya migunda kana cuba migunda minyinyi. </li>
          </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansWeedManagementKik></BeansWeedManagementKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansWaterManagementFullKik

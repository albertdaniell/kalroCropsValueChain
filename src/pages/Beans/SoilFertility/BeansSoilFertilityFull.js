import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansCropsManagementPrev from "../CropsManagement/BeansCropsManagementPrev";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPlanting from "../Planting/BeansPlanting";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";



function BeansSoilFertilityFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Varieties</h5>
            <hr></hr>
            Beans grow fast and can mature within two months, on average the time can vary from 45 to 75 days, depending on the variety and the climatic conditions

         
          <ul>
   <li>Add manure and fertilizers to the soil in the right amounts to provide the required plant nutrients for vigorous crop growth</li>
   <li>Manure is to be applied based on soil test results at planting and at top dress. Use only non-acidifying fertilizers</li>
   <li>Note; Beans top dressing is not recommended given that it’s a leguminous crop that utilizes its fixed nitrogen in the soil</li>
   <li>Only replenish nutrients that test results show are needed for the right balance</li>
          </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansCropsManagementPrev></BeansCropsManagementPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansSoilFertilityFull

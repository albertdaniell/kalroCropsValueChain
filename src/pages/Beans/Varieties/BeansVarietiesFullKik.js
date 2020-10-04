import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPlanting from "../Planting/BeansPlanting";
import BeansPlantingKik from "../Planting/BeansPlantingKik";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";



function BeansVarietiesFullKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Mithemba </h5>
            <hr></hr>
            Beans gmboco ikuranga naihenya, ihinda ria mieri iiri, thiku kuuma 45 ngiya tiku 75 kuringana na rierarow fast and can mature within two months, on average the time can vary from 45 to 75 days, depending on the variety and the climatic conditions

         
            <h6>Muthemba uria mwendekithie</h6>
          <ul>
        <li>
        Thuura mbegu kuringana na riera ri kuanyu (agroecological zones) kuuma kuri endia ahitukie
        </li>
  
          </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansPlantingKik></BeansPlantingKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansVarietiesFullKik

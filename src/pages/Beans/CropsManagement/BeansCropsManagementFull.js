import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPestManagement from "../PestManagement/BeansPestManagement";
import BeansPlanting from "../Planting/BeansPlanting";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";



function BeansCropsManagementFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Crop management </h5>
            <hr></hr>
            Gapping and thinning should be done after 14 days of seed emergence


         
          <ul>
 <li>
 Apply IPM principles for increased use of biophysical methods and reduced use of agrochemical methods to control weeds </li>
 <li>
 Apply manure/boost soil fertility and also crop rotation </li>
      </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansPestManagement></BeansPestManagement>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansCropsManagementFull

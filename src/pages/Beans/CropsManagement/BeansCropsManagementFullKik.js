import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPestManagement from "../PestManagement/BeansPestManagement";
import BeansPestManagementKik from "../PestManagement/BeansPestManagementKik";
import BeansPlanting from "../Planting/BeansPlanting";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";



function BeansCropsManagementFullKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kurora mumera  </h5>
            <hr></hr>
            Kuruta ruta mumea ni thutha wa thiku 14 
Kuuma kumera
 
 

         
          <ul>
 <li>
 Apply IPM principles for increased use of biophysical methods and reduced use of agrochemical methods to control weeds
 </li>
 <li>
 Ongerera thumu niguo kunoria tiiri
 </li>
      </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansPestManagementKik></BeansPestManagementKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansCropsManagementFullKik

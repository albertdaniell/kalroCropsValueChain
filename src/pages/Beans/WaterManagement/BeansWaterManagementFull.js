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



function BeansWaterManagementFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Water Management</h5>
            <hr></hr>
            Irrigate if necessary and control weeds timely


         
          <ul>
    <li>Apply water directly if necessary, to where it is consumed</li>
    <li>Use drip irrigation, bottle solution for small fields </li>
          </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansWeedManagement></BeansWeedManagement>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansWaterManagementFull

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



function BeansWeedManagementFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Water Management</h5>
            <hr></hr>
            Control weeds timely


         
          <ul>
    <li>1st weeding is done 3-4 weeks after germination</li>
    <li>2nd weeding is done just before topdressing</li>
          </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansSoilFertility></BeansSoilFertility>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansWeedManagementFull

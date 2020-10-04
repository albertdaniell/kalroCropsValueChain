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



function BeansWeedManagementFullKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kumenyerera ria  </h5>
            <hr></hr>
            Rimira kwa mahinda kwa mahinda
 

          <ul>
    <li>Irimira riambere ni thutha wa  3-4 weeks thutha wa kumera</li>
    <li>Ria keri ni thutha wa kuongerera thumu</li>
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

export default BeansWeedManagementFullKik

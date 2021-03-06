import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPlanting from "../Planting/BeansPlanting";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";



function BeansVarietiesFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Varieties</h5>
            <hr></hr>
            Beans grow fast and can mature within two months, on average the time can vary from 45 to 75 days, depending on the variety and the climatic conditions

         <h6>Recommended varieties</h6>
          <ul>
            <li>Select seeds that are adapted to local agroecological zones and from a recommended source</li>
            <li>Ensure the required variety</li>
  
          </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansPlanting></BeansPlanting>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansVarietiesFull

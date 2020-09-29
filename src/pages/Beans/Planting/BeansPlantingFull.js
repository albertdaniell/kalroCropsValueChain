import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPrePlanting from "../PrePlanting/BeansPrePlanting";



function BeansPlantingFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Site selection</h5>
            <hr></hr>
            Ensure germination test is done before planting. Plant along the contour at the onset of rains and when the soil is moist 
            <h6>Recommended varieties</h6>
          <ul>
              <li>Select seeds that are adapted to local agroecological zones and from a recommended source</li>
              <li>Ensure the required variety</li>
          </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansPrePlanting></BeansPrePlanting>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansPlantingFull

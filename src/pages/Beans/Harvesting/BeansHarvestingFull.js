import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansHarvestingPrev from "../Harvesting/BeansHarvestingPrev";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansMaturity from "../Maturity/BeansMaturity";
import BeansPestManagement from "../PestManagement/BeansPestManagement";
import BeansPlanting from "../Planting/BeansPlanting";
import BeansStorage from "../Storage/BeansStorage";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";

function BeansHarvestingFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Harvesting </h5>
            <hr></hr>
            Bean will produce up to 1.0–2.8 tons per ha

        
            <ul>
   <li>
   Dry pods in the sun, thresh and winnow to remove chaff and dust, re-dry to attain storage moisture content level 

   </li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansStorage></BeansStorage>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansHarvestingFull

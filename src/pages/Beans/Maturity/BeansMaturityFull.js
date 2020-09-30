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
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";

function BeansMaturityFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Maturity</h5>
            <hr></hr>
            Beans harvesting should be done before pods begin to shatter or rot, usually after 45 to 75 days after planting

        
            <ul>
   <li>Dry pods in the sun on clean mats, canvas or wire mesh trays on raised platform</li>
   <li>Thresh an winnow to remove chaff and dust</li>
   <li>Re-dry to attain storage moisture content level to maintain grain quality and to increase shelf life</li>
   <li>Sort before storage to remove damaged, discolored and infected grains before storage</li>
   <li></li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansHarvestingPrev></BeansHarvestingPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer> 
    </div>
  );
}

export default BeansMaturityFull

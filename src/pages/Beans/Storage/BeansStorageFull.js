import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import Next from "../../../layouts/Next/Next";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansHarvestingPrev from "../Harvesting/BeansHarvestingPrev";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansMaturity from "../Maturity/BeansMaturity";
import BeansPestManagement from "../PestManagement/BeansPestManagement";
import BeansPlanting from "../Planting/BeansPlanting";
import BeansStorage from "../Storage/BeansStorage";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";

function BeansStorageFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Storage  </h5>
            <hr></hr>
            Store in airtight bags or metallic silos to minimize use of pesticides


        
            <ul>
   <li>
   Use insecticides to preserve beans, store it in sisal or jute bags, on raised pallets to protect from rodents 

   </li>
            </ul>
          </p>

          <p>
          <Next pageToGo="Potatoes" to='/potatoLanding'></Next>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}
export default BeansStorageFull

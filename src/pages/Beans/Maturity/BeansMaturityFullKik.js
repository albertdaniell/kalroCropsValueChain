import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansHarvestingPrev from "../Harvesting/BeansHarvestingPrev";
import BeansHarvestingPrevKik from "../Harvesting/BeansHarvestingPrevKik";


function BeansMaturityFullKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Gukura </h5>
            <hr></hr>
            Mboco ciagiriirwo kugethwo mbere ya ciambitie kuhura/gwatuka kubutha  thutha wa thiku 45 ngiya 75 thutha wa kuhanda (Beans harvesting should be done before pods begin to shatter or rot, usually after 45 to 75 days after planting) 
 
        
            <ul>
   <li>
   Umithia mboco riua-ini, kiandarua-ini githeru handu iguru
   </li>
   <li>
   Ruta mboco mako-ini/ muciri-ini na uhuhe niguo urute rukungu na mahuti
   </li>
   <li>
   Umithia ringi na uigu muiganu nigetha ikorwo ciri nyumu wega na ciigike ihinda iraihu.
   </li>
   <li>
   Thura mbere ya kuiga niguo urute iria njoru, iria ciina rangi ingi na iria hutie ni tutambi.
   </li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansHarvestingPrevKik></BeansHarvestingPrevKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer> 
    </div>
  );
}

export default BeansMaturityFullKik

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

function BeansHarvestingFullKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kugetha  </h5>
            <hr></hr>
            Mboco ciagiriirwo ni kugethwo kuuma 
1.0–2.8 hari acre 
 
        
            <ul>
   <li>
   Umithia miciri, thandura na uhuhe niguo urute rukungu na mahuti, umithia ringi niguo ciigike wega
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

export default BeansHarvestingFullKik

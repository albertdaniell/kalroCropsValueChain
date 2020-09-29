import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";



function BeansSiteSelectionFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Land preparation</h5>
            <hr></hr>
            Consider minimum tillage to reduce cost and to conserve soil, water and nutrients, and to reduce workload 
            <h6>Steps during land preparation</h6>
     <ul>
         <li>Slash and plant using appropriate tools e.g. rippers, jab planters, dibbler, oxen drawn equipment e.g. the ripper, tractor drawn no till planter</li>
         <li>Ploughing is done by preparing the soil using chisel ploughs to avoid fine tilths</li>
         <li>Hoes and oxen drawn implements can also be used</li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>

         
     </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansLandPreparation></BeansLandPreparation>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansSiteSelectionFull;

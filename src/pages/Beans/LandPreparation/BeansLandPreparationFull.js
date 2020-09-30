import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPrePlanting from "../PrePlanting/BeansPrePlanting";

function BeansLandPreparationFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Land preparation</h5>
            <hr></hr>
            Consider minimum tillage to reduce cost and to conserve soil, water
            and nutrients, and to reduce workload
            <h6>Steps during land preparation</h6>
            <ul>
              <li>
                Slash and plant using appropriate tools e.g. rippers, jab
                planters, dibbler, oxen drawn equipment e.g. the ripper, tractor
                drawn no till planter
              </li>
              <li>
                Ploughing is done by preparing the soil using chisel ploughs to
                avoid fine tilths
              </li>
              <li>Hoes and oxen drawn implements can also be used</li>
              <li>Contour farming technique recommended</li>
              <li>
                Add manure and fertilizers to the soil in the right amounts to
                provide the required plant nutrients for vigorous crop growth
              </li>
              <li>Maintain soil health for good production and income</li>
              <li>
                Test soils first to guide application of manure and fertilizer
              </li>
              <li>Apply only deficient nutrients</li>
              <li>
                Consider using conservation farming approaches minimum soil
                disturbance, permanent soil cover, crop rotation, soil
                conservation measures
              </li>
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

export default BeansLandPreparationFull;

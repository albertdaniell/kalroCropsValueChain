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
            <h5>Site selection</h5>
            <hr></hr>
            Select a site away from shade to allow for sufficient sunshine and
            should be at least 10 meters away from the road to prevent dust and
            vehicle fumes
            <h6>Altitude range</h6>
            Beans require altitudes of altitude of 1000 – 2000 masl,
            <h6>Soil type and conditions</h6>
            Well-drained soils with a soil pH: 6.0 – 7.0.
            <h6>Temperature range</h6>
            The temperatures should be 20 – 30 oC optimal.
            <h6>Rainfall</h6>
            The rainfall should be 750 – 4000 mm p.a
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

import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPrePlanting from "../PrePlanting/BeansPrePlanting";
import BeansVarieties from "../Varieties/BeansVarieties";

function BeansPreplantingFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Pre-planting</h5>
            <hr></hr>
            <h6>Planting materials </h6>
Certified seed 
Farmer saved seeds 

<h6>Common planting materials</h6>

            Seeds should be obtained from reliable sources. Farmer saved seeds are alternatives where certified seeds aren’t available or the seed can be bought from the market 
          </p>

          <p>
            <h6>Next</h6>
            <BeansVarieties></BeansVarieties>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansPreplantingFull

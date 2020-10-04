import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import ImageRow from "../../../layouts/Container/ImageRow";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPrePlanting from "../PrePlanting/BeansPrePlanting";
import BeansVarieties from "../Varieties/BeansVarieties";


import MyContainer from "../../../layouts/Container/MyContainer";
import BeansVarietiesKik from "../Varieties/BeansVarietiesKik";
function BeansPreplantingFullKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Mbere ya kuhanda</h5>
            <hr></hr>
            <h6>Indo cia kuhanda </h6>
            Mbegu hitukie
Mbegu cia imera hituku

<h6>Iria ihandagwo muno</h6>

Mbegu kuuma handu hehokeku/hitukie, Mbegu cia imera hituku no cihuthirwo angikirwo gutiri mbegu hitukie  kana ugure thoko ini/dukaini.
         
          </p>

          <p>
            <h6>Next</h6>
            <BeansVarietiesKik></BeansVarietiesKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansPreplantingFullKik

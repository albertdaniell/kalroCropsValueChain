import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansSiteSelection from "../SiteSelection/BeansSiteSelection";
function BeansLanding() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>OverView</h5>
            <hr></hr>
            Beans (Phaseolus vulgaris) Local names in Kenya (Maharagwe, Oganda;
            Managanda)
          </p>
          <p>
            <h5>Introduction</h5>
            <hr></hr>
            Beans is herbaceous annual plant grown for its edible dry seeds or
            unripe fruits. It is the second most important staple food after
            maize for the local people in Kenya. Its leaves are also used as
            vegetable and straw for animal fodder. In Kenya common beans are
            grown mainly for subsistence and for the local market. It is highly
            rich in protein hence known to be the cheapest source of protein,
            starch and minerals such as iron and potassium. Beans are cooked by
            boiling, frying, and baking or can be bought cooked or canned.
          </p>
          <p>

              <BeansSiteSelection></BeansSiteSelection>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
            <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansLanding;

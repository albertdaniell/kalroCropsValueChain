import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansCropsManagementPrev from "../CropsManagement/BeansCropsManagementPrev";
import BeansDiseaseManagementPrev from "../DiseaseManagement/BeansDiseaseManagementPrev";
import BeansHarvestingPrev from "../Harvesting/BeansHarvestingPrev";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansMaturity from "../Maturity/BeansMaturity";
import BeansPestManagement from "../PestManagement/BeansPestManagement";
import BeansPlanting from "../Planting/BeansPlanting";
import BeansPrePlanting from "../PrePlanting/BeansPrePlanting";
import BeansSiteSelection from "../SiteSelection/BeansSiteSelection";
import BeansSoilFertility from "../SoilFertility/BeansSoilFertility";
import BeansStorage from "../Storage/BeansStorage";
import BeansVarieties from "../Varieties/BeansVarieties";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";
import BeansWeedManagement from "../WeedManagement/BeansWeedManagement";
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
              <BeansLandPreparation></BeansLandPreparation>
              <BeansPrePlanting></BeansPrePlanting>
              <BeansVarieties></BeansVarieties>
              <BeansPlanting></BeansPlanting>
              <BeansWaterManagement></BeansWaterManagement>
              <BeansWeedManagement></BeansWeedManagement>
              <BeansSoilFertility></BeansSoilFertility>
              <BeansCropsManagementPrev></BeansCropsManagementPrev>
              <BeansPestManagement></BeansPestManagement>
              <BeansDiseaseManagementPrev></BeansDiseaseManagementPrev>
              <BeansMaturity></BeansMaturity>
              <BeansHarvestingPrev></BeansHarvestingPrev>
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

export default BeansLanding;

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
function BeansLandingKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kwa ukuhi</h5>
            <hr></hr>
            Mboco (Phaseolus vulgaris) Maritwa mahuthagirwo Kenya (Maharagwe,
            Oganda; Managanda)
          </p>
          <p>
            <h5>Kiambiriria</h5>
            <hr></hr>
            Mboco ni mumera ukuragio na mbegu ciaguo ikario cie nyumithie kana
            ciri njigu. Niguo mumera wa keri wa bata kuuma hari mbembe guku
            kenya. Mahuti maguo ni matumika ta nyeni na ta irio cia mahiu.
            Bururi – ini wa kenya mboco ikuragio ta irio cia muigana wa thoko
            guku bururi ini. Mboco cikoragwo na protein na ni cia thogora wa
            thii ukiringithania na nyama, niciongagirira mwiri hinya (starch) na
            mithemba ingi ya minerals ta ion na potassium. No uruge mboco na
            gutherukia, gukaranga, na no ugure cie hiu na cia mukebe.
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

export default BeansLandingKik;

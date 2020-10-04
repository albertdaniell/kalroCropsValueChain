import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansCropsManagementPrev from "../CropsManagement/BeansCropsManagementPrev";
import BeansCropsManagementPrevKik from "../CropsManagement/BeansCropsManagementPrevKik";
import BeansDiseaseManagementPrev from "../DiseaseManagement/BeansDiseaseManagementPrev";
import BeansDiseaseManagementPrevKik from "../DiseaseManagement/BeansDiseaseManagementPrevKik";
import BeansHarvestingPrev from "../Harvesting/BeansHarvestingPrev";
import BeansHarvestingPrevKik from "../Harvesting/BeansHarvestingPrevKik";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansLandPreparationKik from "../LandPreparation/BeansLandPreparationKik";
import BeansMaturity from "../Maturity/BeansMaturity";
import BeansMaturityKik from "../Maturity/BeansMaturityKik";
import BeansPestManagement from "../PestManagement/BeansPestManagement";
import BeansPestManagementKik from "../PestManagement/BeansPestManagementKik";
import BeansPlanting from "../Planting/BeansPlanting";
import BeansPlantingKik from "../Planting/BeansPlantingKik";
import BeansPrePlanting from "../PrePlanting/BeansPrePlanting";
import BeansPrePlantingKik from "../PrePlanting/BeansPrePlantingKik";
import BeansSiteSelection from "../SiteSelection/BeansSiteSelection";
import BeansSiteSelectionKik from "../SiteSelection/BeansSiteSelectionKik";
import BeansSoilFertility from "../SoilFertility/BeansSoilFertility";
import BeansSoilFertilityKik from "../SoilFertility/BeansSoilFertilityKik";
import BeansStorage from "../Storage/BeansStorage";
import BeansStorageKik from "../Storage/BeansStorageKik";
import BeansVarieties from "../Varieties/BeansVarieties";
import BeansVarietiesKik from "../Varieties/BeansVarietiesKik";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";
import BeansWaterManagementKik from "../WaterManagement/BeansWaterManagementKik";
import BeansWeedManagement from "../WeedManagement/BeansWeedManagement";
import BeansWeedManagementKik from "../WeedManagement/BeansWeedManagementKik";
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
            <BeansSiteSelectionKik></BeansSiteSelectionKik>
            <BeansLandPreparationKik></BeansLandPreparationKik>
            <BeansPrePlantingKik></BeansPrePlantingKik>
            <BeansVarietiesKik></BeansVarietiesKik>
            <BeansPlantingKik></BeansPlantingKik>
            <BeansWaterManagementKik></BeansWaterManagementKik>
            <BeansWeedManagementKik></BeansWeedManagementKik>
            <BeansSoilFertilityKik></BeansSoilFertilityKik>
            <BeansCropsManagementPrevKik></BeansCropsManagementPrevKik>
            <BeansPestManagementKik></BeansPestManagementKik>
            <BeansDiseaseManagementPrevKik></BeansDiseaseManagementPrevKik>
            <BeansMaturityKik></BeansMaturityKik>
            <BeansHarvestingPrevKik></BeansHarvestingPrevKik>
            <BeansStorageKik></BeansStorageKik>
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

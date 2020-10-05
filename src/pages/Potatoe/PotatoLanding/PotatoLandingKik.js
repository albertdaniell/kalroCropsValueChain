import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import ImageRow from "../../../layouts/Container/ImageRow";
import MyContainer from "../../../layouts/Container/MyContainer";
import PotatoeCropsManagementPrev from "../CropsManagement/PotatoeCropsManagementPrev";
import PotatoeDiseaseManagementPrev from "../DiseaseManagement/PotatoeDiseaseManagementPrev";
import PotatoeHarvestingPrev from "../Harvesting/PotatoeHarvestingPrev";
import PotatoeLandPreparationPrev from "../LandPreparation/PotatoeLandPreparationPrev";
import PotatoeMaturityPrev from "../Maturity/PotatoeMaturityPrev";
import PotatoePestManagementPrev from "../PestManagement/PotatoePestManagementPrev";
import PotatoePlantingPrev from "../Planting/PotatoePlantingPrev";
import PotatoePostHarvestingPrev from "../PostHarvesting/PotatoePostHarvestingPrev";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import PotatoePrePlantingPrev from "../PrePlanting/PotatoePrePlantingPrev";
import PotatoeProcessingPrep from "../Processing/PotatoeProcessingPrep";
import PotatoeSiteSelectionPrev from "../SiteSelection/PotatoeSiteSelectionPrev";
import PotatoeSoilFertilityPrev from "../SoilFertility/PotatoeSoilFertilityPrev";
import PotatoeStoragePrev from "../Storage/PotatoeStoragePrev";
import PotatoeVarietiesPrev from "../Varieties/PotatoeVarietiesPrev";
import PotatoeWaterManagementPrev from "../WaterManagement/PotatoeWaterManagementPrev";
import PotatoeWeedManagementPrev from "../WeedManagement/PotatoeWeedManagementPrev";
import image1 from '../../../images/potatoe.jpg'
import PotatoeSiteSelectionPrevKik from "../SiteSelection/PotatoeSiteSelectionPrevKik";
import PotatoeLandPreparationPrevKik from "../LandPreparation/PotatoeLandPreparationPrevKik";
import PotatoePrePlantingPrevKik from "../PrePlanting/PotatoePrePlantingPrevKik";
import PotatoeVarietiesPrevKik from "../Varieties/PotatoeVarietiesPrevKik";
import PotatoePlantingPrevKik from "../Planting/PotatoePlantingPrevKik";
import PotatoeWaterManagementPrevKik from "../WaterManagement/PotatoeWaterManagementPrevKik";
import PotatoeWeedManagementPrevKik from "../WeedManagement/PotatoeWeedManagementPrevKik";
import PotatoeSoilFertilityPrevKik from "../SoilFertility/PotatoeSoilFertilityPrevKik";
import PotatoeCropsManagementPrevKik from "../CropsManagement/PotatoeCropsManagementPrevKik";
import PotatoePestManagementPrevKik from "../PestManagement/PotatoePestManagementPrevKik";
import PotatoeDiseaseManagementPrevKik from "../DiseaseManagement/PotatoeDiseaseManagementPrevKik";

import PotatoeHarvestingPrevKik from "../Harvesting/PotatoeHarvestingPrevKik";
import PotatoeStoragePrevKik from "../Storage/PotatoeStoragePrevKik";
import PotatoeMaturityFullKik from "../Maturity/PotatoeMaturityFullKik";

function PotatoLandingKik() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kwa Ukuhi
</h5>
            <hr></hr>
            waru (Solanum tuberosum)
Maritwa ma waru guku Kenya ni ta (Viazi,, Rabuond, Waru)
          </p>
          <p>
            <h5>Kiambiriria
</h5>
            <hr></hr>
            waru ni mboga na iheaga mwiri hinya, ni irio cia bururi wothe na ikahe arimi umithio. Ni mumera uriagwo muno bururi-ini wa Kenya. kwina wongerereku wa kuria kurimagwo waru bururi-ini.  Muigana wa magetha ukaigananiria kana ukanyiha miaka minini mithiru. Bururi wa kenya wina gicunji kia watho kia mwaka wa 2018 kiria kina uhoro unyitithanitio na urimi uyu wa waru.
            </p>
            <MyContainer>
            <ImageRow caption='Potatoe' divDim='col-sm-6' src={image1}></ImageRow>
            
   
       
            </MyContainer>


            <p>
            <PotatoeSiteSelectionPrevKik></PotatoeSiteSelectionPrevKik>
            <PotatoeLandPreparationPrevKik></PotatoeLandPreparationPrevKik>
            <PotatoePrePlantingPrevKik></PotatoePrePlantingPrevKik>
            <PotatoeVarietiesPrevKik></PotatoeVarietiesPrevKik>
            <PotatoePlantingPrevKik></PotatoePlantingPrevKik>
            <PotatoeWaterManagementPrevKik></PotatoeWaterManagementPrevKik>
            <PotatoeWeedManagementPrevKik></PotatoeWeedManagementPrevKik>
            <PotatoeSoilFertilityPrevKik></PotatoeSoilFertilityPrevKik>
            <PotatoeCropsManagementPrevKik></PotatoeCropsManagementPrevKik>
            <PotatoePestManagementPrevKik></PotatoePestManagementPrevKik>
            <PotatoeDiseaseManagementPrevKik></PotatoeDiseaseManagementPrevKik>
            <PotatoeMaturityFullKik></PotatoeMaturityFullKik>
            <PotatoeHarvestingPrevKik></PotatoeHarvestingPrevKik>
            <PotatoeStoragePrevKik></PotatoeStoragePrevKik>
            <PotatoePostHarvestingPrev></PotatoePostHarvestingPrev>
            <PotatoeProcessingPrep></PotatoeProcessingPrep>
          </p>
          <p></p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
            <PotatoSideMenu></PotatoSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoLandingKik;

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

function PotatoLanding() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Overview</h5>
            <hr></hr>
            Potatoes (Solanum tuberosum)
Local names in Kenya (Viazi,, Rabuond, Waru) 
          </p>
          <p>
            <h5>Introduction</h5>
            <hr></hr>
            Potato is a starchy root vegetable important as a staple food and a
            source of farm incomes. The crop is a major foodstuff in Kenya.
            Whereas there is a general increase in the land area under potato
            cultivation, total national production has remained steady or
            declined over recent years. Kenya has produced Potato Growing
            Regulations 2018 which can be referred in conjunction with
            information provided
            </p>
            <MyContainer>
            <ImageRow caption='Potatoe' divDim='col-sm-6' src={image1}></ImageRow>
            
   
       
            </MyContainer>


            <p>
            <PotatoeSiteSelectionPrev></PotatoeSiteSelectionPrev>
            <PotatoeLandPreparationPrev></PotatoeLandPreparationPrev>
            <PotatoePrePlantingPrev></PotatoePrePlantingPrev>
            <PotatoeVarietiesPrev></PotatoeVarietiesPrev>
            <PotatoePlantingPrev></PotatoePlantingPrev>
            <PotatoeWaterManagementPrev></PotatoeWaterManagementPrev>
            <PotatoeWeedManagementPrev></PotatoeWeedManagementPrev>
            <PotatoeSoilFertilityPrev></PotatoeSoilFertilityPrev>
            <PotatoeCropsManagementPrev></PotatoeCropsManagementPrev>
            <PotatoePestManagementPrev></PotatoePestManagementPrev>
            <PotatoeDiseaseManagementPrev></PotatoeDiseaseManagementPrev>
            <PotatoeMaturityPrev></PotatoeMaturityPrev>
            <PotatoeHarvestingPrev></PotatoeHarvestingPrev>
            <PotatoeStoragePrev></PotatoeStoragePrev>
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

export default PotatoLanding;

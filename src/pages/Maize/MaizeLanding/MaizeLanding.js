import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import CropsManagementPrev from "../CropsManagement/CropsManagementPrev";
import DiseaseManagementPrev from "../DiseaseManagement/DiseaseManagementPrev";
import HarvestingPrev from "../Harvesting/HarvestingPrev";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import MaturityPrev from "../Maturity/MaturityPrev";
import PestManagementPrev from "../PestManagement/PestManagementPrev";
import PlantingPrev from "../Planting/PlantingPrev";
import PostHarvestingPrev from "../PostHarvesting/PostHarvestingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import ProcessingPrev from "../Processing/ProcessingPrev";
import SiteSelectionPrev from "../SiteSelection/SiteSelectionPrev";
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import StoragePrev from "../Storage/StoragePrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WaterManagementPrev from "../WaterManagement/WaterManagementPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";

function MaizeLanding() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
            <p>
                <h5>Overview</h5>
                <hr></hr>
                Maize(Zea mays)
Local names in Kenya (Mahindi, Oduma, Bando, Madumwa) 
            </p>
          <p>
              <h5>Introduction</h5>
              <hr></hr>
            Maize is the most important cereal crop in Kenya. It is the staple
            food for most rural population. It is used as a human food, animal
            feed, production of beverages and also making of bio-fuel. Maize is
            a versatile crop with a wide genetic base and a large number of
            varieties growing across a range of agro-ecological zones (AEZ) and
            soil types and having differing maturity periods. However, maize
            grows best on well-drained, well-aerated, deep soils containing
            adequate organic matter and well supplied with requisite nutrients.
            Maize will produce 2 metric tons per hectare under good management
          </p>
          <p>
              <SiteSelectionPrev></SiteSelectionPrev>
              <LandPreparationPrev></LandPreparationPrev>
              <PrePlantingPrev></PrePlantingPrev>
              <VarietiesPrev></VarietiesPrev>
              <PlantingPrev></PlantingPrev>
              <WaterManagementPrev></WaterManagementPrev>
              <WeedManagementPrev></WeedManagementPrev>
              <SoilFertilityPrev></SoilFertilityPrev>
              <CropsManagementPrev></CropsManagementPrev>
              <PestManagementPrev></PestManagementPrev>
              <DiseaseManagementPrev></DiseaseManagementPrev>
              <MaturityPrev></MaturityPrev>
              <HarvestingPrev></HarvestingPrev>
              <StoragePrev></StoragePrev>
              <PostHarvestingPrev></PostHarvestingPrev>
              <ProcessingPrev></ProcessingPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
            <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default MaizeLanding;

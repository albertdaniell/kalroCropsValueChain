import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import DiseaseManagementPrev from "../DiseaseManagement/DiseaseManagementPrev";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import MaturityPrev from "../Maturity/MaturityPrev";
import PlantingPrev from "../Planting/PlantingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import ProcessingPrev from "../Processing/ProcessingPrev";
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import StoragePrev from "../Storage/StoragePrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";

function PostHarvestingFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Post-harvest handling </h5>
            <hr></hr>
         
            Transport maize from the field to the place of shelling using clean transport equipment dry before shelling winnow to remove dust 
            <ul>
                <li>Accessible methods of determining or estimating moisture content can be used </li>
                <li>If insecticides are used to preserve maize, store it in sisal or jute bags on raised pallets to protect from rodents and chaff</li>
             
            </ul>
          </p>

          <p>
            <h6>Next</h6>
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

export default PostHarvestingFull

import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPrePlanting from "../PrePlanting/BeansPrePlanting";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";



function BeansPlantingFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Beans Planting</h5>
            <hr></hr>
            Ensure germination test is done before planting. Plant along the contour at the onset of rains and when the soil is moist 
         
            <ul>
     <li>Plant at the onset of rains e.g. 4 continuous days of sufficient rain to take advantage of nitrogen flush</li>
     <li>Plant along the contours or across the slope and when the soil is moist</li>
     <li>Fill gaps one to two weeks after planting when plants have emerged</li>
     <li>Thin to remove weak plants under moist soil conditions 14 days after emergence </li>
     <li>Beans pure stand; seed rate 23kgs per acre; 2-3 seeds per hole at 25 by 60 cm or 15 by 25 cm depending on variety </li>
     <li>Sort out good seeds to ensure that they are free from insects, disease infestation and weed seeds</li>
     <li>Do not use damaged or wrinkled seeds, or seeds with holes </li>
     <li>Planting bush beans in a monoculture on a flatbed is done by planting in rows which are 50 cm apart</li>
     <li>Within a row, plant seeds at 8-10 cm apart (1 seed per stand) or 15-20 cm apart (2 seeds per stand)</li>
     <li>Planting climbing beans: Plant climbing bean in rows which are 75 cm apart. Within a row, sow seeds 15 cm apart (1 seed per stand) or 25-30 cm apart (2 seeds per stand)</li>

          </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansWaterManagement></BeansWaterManagement>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansPlantingFull

import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansDiseaseManagementPrev from "../DiseaseManagement/BeansDiseaseManagementPrev";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPlanting from "../Planting/BeansPlanting";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";



function BeansPestManagementFullKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kuhurana na tutambi </h5>
            <hr></hr>
            Tutambi ni ta ; African bollworm, Bean aphid, Bean fly, Flower thrips and 
Leaf miner 
 
 

<h6>Tutambi ni ta ;</h6>
<ul>
<li>
African bollworm (Heliothis armigera), Bean aphid (Aphis fabae), Bean fly (Ophiomyia spp), Flower thrips (Taeniothrips siostedti) and Leaf miner 
</li>
<li>
Huthira dawa hitukie ni ataramu kuhurana na tutambi
</li>
</ul>

<h6>Control of pests</h6>
<ul>
    <li>Use Integrated Pest Management</li>
   <li>
   (Kuhanda na kugetha tene)Plant early and harvest early
   </li>
   <li>
   (Munya mumera uria wina tutambi)Remove infected materials
   </li>
   <li>
   (Cenjania mimera na imera)Practice crop rotation
   </li>
   <li>
   (handa mbegu cingiitiria tutambu) Use of resistant varieties
   </li>
   <li>
   (huthira dawa hitukie ni ataramu) Use of appropriate insecticides as recommended by experts
   </li>

</ul>


          </p>

          <p>
            <h6>Next</h6>
            <BeansDiseaseManagementPrev></BeansDiseaseManagementPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer> 
    </div>
  );
}

export default BeansPestManagementFullKik

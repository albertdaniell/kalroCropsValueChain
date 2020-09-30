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



function BeansPestManagementFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Pest management</h5>
            <hr></hr>
            Pests include; African bollworm, Bean aphid, Bean fly, Flower thrips and Leaf miner


<h6>Pests include;</h6>
<ul>
    <li>African bollworm (Heliothis armigera), Bean aphid (Aphis fabae), Bean fly (Ophiomyia spp), Flower thrips (Taeniothrips siostedti) and Leaf miner
</li>
<li>They are controlled by field use of Integrated Pest Management (IPM), plant early or harvest early, rogueing, crop rotation, resistant varieties</li>
<li>Use of appropriate insecticides as recommended by experts</li>
</ul>

<h6>Control of pests</h6>
<ul>
    <li>Use Integrated Pest Management</li>
    <li>Plant early and harvest early</li>
    <li>Remove infected materials</li>
    <li>Practice crop rotation</li>
    <li>Use of resistant varieties</li>
    <li>Use of appropriate insecticides as recommended by experts</li>

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

export default BeansPestManagementFull

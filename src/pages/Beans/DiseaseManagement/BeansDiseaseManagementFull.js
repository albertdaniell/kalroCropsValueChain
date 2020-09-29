import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansMaturity from "../Maturity/BeansMaturity";
import BeansPestManagement from "../PestManagement/BeansPestManagement";
import BeansPlanting from "../Planting/BeansPlanting";
import BeansWaterManagement from "../WaterManagement/BeansWaterManagement";

function BeansDiseaseManagementFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Disease management</h5>
            <hr></hr>
            Diseases include; Root rots Leaf spots, Alternaria, Anthracnose,
            Bean rust Bacterial blight Common Xanthomonas phaseoli, Ashy stem,
            Bean common mosaic necrosis virus (BCMV), Bean scab and White mould
            <h6>Diseases include;</h6>
            Root rots (Fusarium, Black), Leaf spots (Angular Phaeisariopsis
            griseola, Alternaria) Anthracnose (Colletotrichum lindemuthianum),
            Bean rust (Uromyces appendiculatus), Bacterial blight (Halo
            Pseudomonas phaseolus, Common Xanthomonas phaseoli, Ashy stem
            (Macrophomina phaselina), Bean common mosaic necrosis virus (BCMV),
            Bean scab (Elsione phaseoli) and White mould (Sclerotinia phaseoli)

            <h6>Control of diseases</h6>
            <ul>
          <li>Use of certified disease resistant and tolerant varieties</li>
          <li>Practice crop rotation to prevent disease build up</li>
          <li>Ensure field sanitation, weed free field to control host plants</li>
          <li>Rogueing</li>
          <li>Use of appropriate fungicides as recommended by experts</li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansMaturity></BeansMaturity>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansDiseaseManagementFull;

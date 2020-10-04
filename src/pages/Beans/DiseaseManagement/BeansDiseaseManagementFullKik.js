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

function BeansDiseaseManagementFullKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kuhurana na mirimu </h5>
            <hr></hr>
            Mirimu ni ta ; kubutha miri (Root rots) 
Kuhia mathangu(Leaf spots), Alternaria, 
Anthracnose, kuhia mbaa(Bean rust 
Bacterial blight Common )
Xanthomonas phaseoli, Ashy stem, gukua ( Bean common mosaic necrosis virus (BCMV)), Bean scab and 
Ume(White mould )
 
            <h6>Mirimu ni ta;</h6>
            Mirimu ni ta ; kubutha miri (Root rots) 
Kuhia mathangu(Leaf spots), Alternaria, 
Anthracnose, kuhia mbaa(Bean rust 
Bacterial blight Common )
Xanthomonas phaseoli, Ashy stem, gukua ( Bean common mosaic necrosis virus (BCMV)), Bean scab and 
Ume(White mould )
            <h6>Control of diseases</h6>
            <ul>
  <li>
  Handa mbegu cia gwitiria mirimu na tutambi
  </li>
  <li>
  Uchenjania wa mimera kugiririria utheremu wa mirimu
  </li>
  <li>
  Huthira dawa njitikirie
  </li>
  <li>
  Umunyi wa ria
  </li>
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

export default BeansDiseaseManagementFullKik;

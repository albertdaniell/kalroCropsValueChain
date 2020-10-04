import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansPrePlanting from "../PrePlanting/BeansPrePlanting";



function BeansPlantingFull() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>kuhanda</h5>
            <hr></hr>
            Geria mbegu kana ni ikumera mbere ya kuhanda 
 . handa mbegu kuringana na mutaro  mbura kiambiriria riria tiiri wina uigu.           
            <ul>
     <li>Handa mbura ikiambiriria   ta thiku inya cia mbura ya mbere niguo mumera ugie thumu wa nitrogen flush</li>
   <li>. handa mbegu kuringana  na mutaro  kana kirimaina kia mutaro riria tiiri wina uigu</li>
   <li>Cokereria mathenya maria matanamera thutha wa ciumia igiri</li>
   <li>Munya mumera uria utari na hinya riria tiiri wi muigu thutha thiku  14 thutha wa kumera</li>
   <li>Mboco ihandagwo 23kgs hari acre; mbegu 23 o hari irima na githimi gia 25 by 60 cm kana 15 by 25 cm kuringana na muthemba</li>
   <li>Thuura mbegu njega itari hutie ni tutambi, ndwaru kana mbuthu</li>
   <li>Ndukahuthire mbegu ndwaru, ngujanu kana mbegu cina marima</li>
   <li>Kuhanda mboco cia mahuti maingi  hamwe ihandagwo kundu kuigananu na miraini ya githimi kia utiganu wa 50cm (Planting bush beans in a monoculture on a flatbed is done by planting in rows which are  50 cm apart)</li>
   <li>Mitaro ini, mbegu itigane na githimi kia  8-10 cm na mitaro itigane na githimi kia 15-20 cm apart (2 seeds per stand) </li>
   <li>kuhanda mboco cia gutamba: mitaro itigane na githimi kia 75 cm. gatagati ka mitaro itigane, sow seeds 15 cm apart (1 seed per stand) or 25-30 cm apart (2 seeds per stand)</li>
          </ul>
          </p>

          <p>
            <h6>Next</h6>
            <BeansPrePlanting></BeansPrePlanting>
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

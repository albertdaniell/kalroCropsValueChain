import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";

import MaizeHeader from "../MaizeHeader/MaizeHeader";

import StoragePrev from "../Storage/StoragePrev";


function HarvestingFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Harvesting</h5>
            <hr></hr>
         
            Harvesting by cutting and stalking to enhance drying and prevent pathogen infestation


            <ul>
                <li>Harvesting is done when the crop reaches harvest maturity 10 to 15 days after physiological maturity</li>
                <li>Harvesting is done by cutting and stalking to enhance drying, make it easy to harvest and to prevent pathogen infestation</li>
                <li>Harvest by de-husking.</li>
            
      
            </ul>
          </p>

          <p>
            <h6>Next</h6>
     <StoragePrev></StoragePrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default HarvestingFull;

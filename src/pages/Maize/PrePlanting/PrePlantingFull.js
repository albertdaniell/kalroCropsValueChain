import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";

function PrePlantingFullFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Pre-Planting</h5>
            <hr></hr>
            <h6>Planting materials </h6>
            Common planting materials include certified seeds and farmer saved
            seeds
            <h6>Common planting materials</h6>
            Select seed grains situated at the middle of the cob and discard
            grains at the base and the tip of the cob
            <br></br>
            Seeds should be obtained from reliable sources
            <br></br>
            Farmer saved seeds are alternatives where certified seeds aren’t
            available or the seed can be bought from the market
          </p>

          <p>
            <h6>Next</h6>
            <VarietiesPrev></VarietiesPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PrePlantingFullFull;

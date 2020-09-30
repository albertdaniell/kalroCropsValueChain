import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import ImageRow from "../../../layouts/Container/ImageRow";
import MyContainer from "../../../layouts/Container/MyContainer";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import image1 from '../../../images/maize/2a.jpg'
import image2 from '../../../images/maize/2b.jpg'


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
            </p>
            <MyContainer>
            <ImageRow divDim='col-sm-4' src={image1} ></ImageRow>
            <ImageRow divDim='col-sm-4' src={image2} ></ImageRow>

          </MyContainer>
            <p>

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

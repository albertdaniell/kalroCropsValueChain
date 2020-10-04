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
import VarietiesPrevKik from "../Varieties/VarietiesPrevKik";


function PrePlantingFullFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Mbere ya kuhanda</h5>
            <hr></hr>
            <h6> Mbegu cia kuhanda </h6>
                    mbegua cia kuhanda ni iria hitukie ni ataramu
            <h6>Indo cia kuhanda</h6>
            </p>
            <MyContainer>
            <ImageRow divDim='col-sm-4' src={image1} ></ImageRow>
            <ImageRow divDim='col-sm-4' src={image2} ></ImageRow>

          </MyContainer>
            <p>

            thuura mbegu gatagati ya mucakwe na ute mbegu iria cia muthia ini na gitina- ini
            <br></br>
            etha/gura mbuge kuria andu ehokeku
            <br></br>
            tumira mbegu cia kimera kuria utagiona mbegu hitukie ni ataramu kana ugure thoko ini
          </p>

          <p>
            <h6>Next</h6>
            <VarietiesPrevKik></VarietiesPrevKik>
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

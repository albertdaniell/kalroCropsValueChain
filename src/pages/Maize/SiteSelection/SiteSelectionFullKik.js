import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";

function SiteSelectionFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Site Selection</h5>
            <hr></hr>
            thurahanduhatarikirurunahenariuariiganunagithimikiamakinyaikumi (10metres) kuumaharibarabaraniunduwakugiririarukungurwagaarinandogo
            <h6>Altitude range</h6>
            Mbembeyendagagithimakiarieramuiganawa 0-2200 maslIrimaini; muigananiro; mikurukuringananamuthemba.  
            <h6>Soil type and conditions</h6>
            Mbembeyendagagithimakiarieramuiganawa 0-2200 maslIrimaini; muigananiro; mikurukuringananamuthemba.  
            <br></br>
            pH/ururuwatiri 5.5-7.5. mbembeyendaga fertilizer ici; N, P, K, Mg, Ca, S, Fe, Zn, Mn, B, Cu, Mo, Cl.  
            <h6>Temperature range</h6>
            urugariwagiriirwogukorwo 25-30 oC            <h6>Rainfall</h6>
            Muiganawamburani 400 – 1200 mm p.a
          </p>

          <p>
            <h6>Next</h6>
            <LandPreparationPrev></LandPreparationPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default SiteSelectionFull;

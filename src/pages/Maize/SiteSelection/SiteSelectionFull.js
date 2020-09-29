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
            Select a site away from shade to allow for sufficient sunshine and
            should be at least 10 meters away from the road to prevent dust and
            vehicle fumes
            <h6>Altitude range</h6>
            Maize require an altitude of 0-2200 masl Highlands; Midlands;
            Lowlands depending on variety.
            <h6>Soil type and conditions</h6>
            It requires deep, well drained, fertile alluvial or loam soils with
            good water holding capacity and high organic matter
            <br></br>
            The pH should be 5.5-7.5. Maize nutrient requirements include; N, P,
            K, Mg, Ca, S, Fe, Zn, Mn, B, Cu, Mo, Cl.
            <h6>Temperature range</h6>
            The optimal temperatures should be 25-30 oC
            <h6>Rainfall</h6>
            Maize require rainfall of 400 – 1200 mm p.a
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

import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";

import MaizeHeader from "../MaizeHeader/MaizeHeader";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";

function LandPreparationFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Land preparation</h5>
            <hr></hr>
            Add manure and fertilizer with recommendations from soil testing and
            analysis
            <h6>Steps during land preparation</h6>
            <ul>
              <li>
                Consider minimum tillage to reduce cost and to conserve soil,
                water and nutrients and to reduce workload
              </li>
              <li>
                Slash and plant using appropriate tools e.g. rippers, jab
                planters, dibbler, oxen drawn equipment e.g. the ripper, tractor
                drawn no till planter
              </li>
              <li>
                Ploughing of the soil should be done using chisel ploughs to
                avoid fine tilths. Hoes and oxen drawn implements can also be
                used
              </li>
              <li>Contour farming technique recommended</li>
              <li>
                Add manure and fertilizers to the soil in the right amounts to
                provide the required plant nutrients for vigorous crop growth
              </li>
            </ul>
          </p>

          <p>
            <h6>Next</h6>
            <PrePlantingPrev></PrePlantingPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default LandPreparationFull;

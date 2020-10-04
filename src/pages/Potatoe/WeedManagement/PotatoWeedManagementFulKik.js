import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import PotatoeSoilFertilityPrev from "../SoilFertility/PotatoeSoilFertilityPrev";

function PotatoWeedManagementFullKik() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kurimira riya</h5>
            <hr></hr>
            Kurimira riya o thutha wa wiki 2 na 5 thutha wa kumera
            <ul>
              <li>Geria kwaga kurimira riya thutha wa kuruta mahua</li>
              <li>niguo kurigiriria mirimu ya waru na waru gutihiyo</li>
            </ul>
            <PotatoeSoilFertilityPrev></PotatoeSoilFertilityPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <PotatoSideMenu></PotatoSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoWeedManagementFullKik;

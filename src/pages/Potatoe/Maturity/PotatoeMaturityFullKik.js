import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoeHarvestingPrev from "../Harvesting/PotatoeHarvestingPrev";
import PotatoeHarvestingPrevKik from "../Harvesting/PotatoeHarvestingPrevKik";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoeMaturityFullKik() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>ugima</h5>
            <hr></hr>
            Waru ugimaraga na thiku 90-120 thutha wa kuhandwo
            <ul>
              <li>Kuuma kwa mathangu kuonanagia ni mukuru wa kugethwo .</li>
            </ul>
            <PotatoeHarvestingPrevKik/>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <PotatoSideMenu></PotatoSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoeMaturityFullKik;

import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import PotatoeStoragePrev from "../Storage/PotatoeStoragePrev";

function PotatoeHarvestingFullKik() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>kugetha</h5>
            <hr></hr>
            Tiniria kiwaru hakuhi na tiri okorwo gitiromite.
            <ul>
              <li>Getha waru na njira ya gucirima na theci. Niguo </li>
              <li>
                ndugacitihie muno Ureke ciume kwa ihinda inini thutha wa
                gucigetha
              </li>
              <li>
                No ugethe uritu 40tons per ha or 16tons per acre urimitwo wega
              </li>
            </ul>
            <PotatoeStoragePrev></PotatoeStoragePrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <PotatoSideMenu></PotatoSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoeHarvestingFullKik;

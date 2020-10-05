import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PostHarvestingPrev from "../../Maize/PostHarvesting/PostHarvestingPrev";
import PostHarvestingPrevKik from "../../Maize/PostHarvesting/PostHarvestingPrevKik";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoeStorageFullKik() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kuiga na ukui wa waru</h5>
            <hr></hr>
            Waru ni uigwo kundu gutari heho kana urugari muingi na kuraihu na
            riua
            <ul>
              <li>Waru wa bangwo ukuwagwo na baithikiri,rori, </li>
              <li>na pick-up kuringana nakuria uratwaruo</li>
              <li>Ukuo riria gutari riua muno</li>
            </ul>
            <PostHarvestingPrevKik/>          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <PotatoSideMenu></PotatoSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoeStorageFullKik;

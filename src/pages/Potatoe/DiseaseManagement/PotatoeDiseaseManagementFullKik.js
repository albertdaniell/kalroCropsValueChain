import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import ImageRow from "../../../layouts/Container/ImageRow";
import MyContainer from "../../../layouts/Container/MyContainer";
import PotatoeMaturityPrev from "../Maturity/PotatoeMaturityPrev";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import image1 from "../../../images/potatoes/5e.jpg";
import image2 from "../../../images/potatoes/5f.jpg";

function PotatoeDiseaseManagementFullKik() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kuhurana na mirimu</h5>
            <hr></hr>
            Mirimu ya bacteria; mbaa, waru kuhia gukua, Waru kuhoha, waru kurota
            na kugia mathundo; mathangu gukujana na kwirua,
          </p>
          <MyContainer>
            <ImageRow
              caption="Kuhia mbaa"
              divDim="col-sm-6"
              src={image1}
            ></ImageRow>
            <ImageRow
              caption="Verticillium wilt"
              divDim="col-sm-6"
              src={image2}
            ></ImageRow>
          </MyContainer>

          <p>
            <h5>Njira cia kugiririria mirimu</h5>

            <ul>
              <li>Kuhanda mbegu theru, hitukie na hinya wa gwitiria mirimu</li>
              <li>
                Utabanie ithimi cia bacterial wilt and nematode (PCN) mbere ya
                uhandite
              </li>
              <li>Utheru wa mugunda ni wa bata muno;theria</li>
              <li>
                mugunda , eheria matigari mothe ma mimera iria urahandite.
              </li>
              <li>Eheria mimera yothe miruaru</li>
              <li>Ndukahuthire mimera miruaru guthondeka thumu</li>
              <li>Garurania mimera na non-solanaceaous crops</li>
              <li>
                Huhira dawa iria hitukie kurigiriria mirimu rungu Rwa mubango wa
                IPM
              </li>
              <li>
                Thimirwo murimu wa gukua kwa waru ni honge ta KALRO or KEPHIS
              </li>
            </ul>
            <PotatoeMaturityPrev></PotatoeMaturityPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <PotatoSideMenu></PotatoSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoeDiseaseManagementFullKik;

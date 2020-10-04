import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoePlantingPrev from "../Planting/PotatoePlantingPrev";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoVarietyFullKik() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5> mithemba</h5>
            <hr></hr>
            Mithemba ithuragwo Kuringana na kundu, aguri kana arii na waru uria
            urendekana thokoini. Na mbegu iria iretiria mirimu na tutambi{" "}
            <h6>Mithemba ya waru:</h6>
            <ul>
              <li>
                Wa kawaida: Kenya Baraka, Roslin tana, Roslin Gucha, Kerrs Pink,
                Roslin Eburu (B 53), Desiree, Feldeslohm, Kenya Dhamana, Chaguo,
                Furaha, Romano, Dutch Robin, Shangi, Pumpernet
              </li>
              <li>
                mweru: Tigoni, Asante, Kenya Karibu, Kenya Mpya, Kenya Sherekea,
                Shangi, Arka, Kabale from Uganda
              </li>
              <li>cia mabururi ma nja: Jelly, Karuso, Connect</li>
              <li>ucio ugi: Unica, Primera, Rudolf</li>
            </ul>
            <PotatoePlantingPrev></PotatoePlantingPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <PotatoSideMenu></PotatoSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoVarietyFullKik;

import React from "react";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoLanding() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Overview</h5>
            <hr></hr>
            Potatoes (Solanum tuberosum)
Local names in Kenya (Viazi,, Rabuond, Waru) 
          </p>
          <p>
            <h5>Introduction</h5>
            <hr></hr>
            Potato is a starchy root vegetable important as a staple food and a
            source of farm incomes. The crop is a major foodstuff in Kenya.
            Whereas there is a general increase in the land area under potato
            cultivation, total national production has remained steady or
            declined over recent years. Kenya has produced Potato Growing
            Regulations 2018 which can be referred in conjunction with
            information provided.
          </p>
          <p></p>
        </AppLeftSideContainer>
        <AppRightSideContainer></AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoLanding;

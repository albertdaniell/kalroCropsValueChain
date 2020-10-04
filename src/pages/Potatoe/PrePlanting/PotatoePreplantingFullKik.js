import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import ImageRow from "../../../layouts/Container/ImageRow";
import MyContainer from "../../../layouts/Container/MyContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import PotatoeVarietiesPrev from "../Varieties/PotatoeVarietiesPrev";
import image1 from "../../../images/potatoes/2a.png";
import image2 from "../../../images/potatoes/2b.jpg";
function PotatoePreplantingFullKik() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>kwihaririria</h5>
            <hr></hr>
            <h6>Mbegu cia kuhanda</h6>
            Cikorwo cihetukie
            <h6>Certified seeds</h6>
            <ul>
              <li>
                Mbegu hitukie Mbegu ikorwo ciumite kwi kambuni hitukie, naikorwo
                cithuranitwo wega na utungu uhuanaine
              </li>
            </ul>
          </p>
          <MyContainer>
            <ImageRow divDim="col-sm-6" src={image1}></ImageRow>
            <ImageRow divDim="col-sm-6" src={image2}></ImageRow>
          </MyContainer>
          <p>
            <ul>
              <li>
                Kuona mbegu ya waru igoro muno murimi no athure njira ya
                kwiigira mbegu cia kuhunda
              </li>
              <li>
                Mbegu iria urahanda no nginya citwarane na riera ria kuria
                urahanda
              </li>
              <li>Undu ungi, no uhande waru handu tuta-ini</li>
            </ul>
            <h6>Uhandi wa mbegu cia waru ciagethetwo</h6>
            <ul>
              <li>
                Ni mubango wa kuhanda mbegu cia waru handu hatugiritio na ha
                uraihu wa 30cm by 30cm nigetha irute nguha na ciciarane
              </li>
            </ul>
            <h6>Mubango wa giterethi kia waru</h6>
            <ul>
              <li>
                Ni mubango wa kuhanda mbegu cia waru handu hatugiritio na ha
                uraihu wa 30cm by 30cm na{" "}
              </li>
              <li>kugethwo niguo itumike ta mbegu kahinda ka</li>
            </ul>
            <PotatoeVarietiesPrev></PotatoeVarietiesPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <PotatoSideMenu></PotatoSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoePreplantingFullKik;

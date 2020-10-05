import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import ImageRow from "../../../layouts/Container/ImageRow";
import MyContainer from "../../../layouts/Container/MyContainer";
import PotatoeDiseaseManagementPrev from "../DiseaseManagement/PotatoeDiseaseManagementPrev";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import image1 from "../../../images/potatoes/4b.jpg";
import image2 from "../../../images/potatoes/4c.jpg";
import image3 from "../../../images/potatoes/4d.png";
import image4 from "../../../images/potatoes/4e.jpg";
import image5 from "../../../images/potatoes/4f.jpg";
import image6 from "../../../images/potatoes/4g.jpg";
import image7 from "../../../images/potatoes/4h.jpg";
import image8 from "../../../images/potatoes/5a.jpg";
import image9 from "../../../images/potatoes/5b.png";
import image10 from "../../../images/potatoes/5c.jpg";
import image11 from "../../../images/potatoes/5d.jpg";

function PotatoePestManagementFullKik() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kuhurana na tutambi</h5>
            <hr></hr>
            Tutambi twa waru ni; gathua, twihuruta, tuber moth, nematodes Potato
            Cyst Nematodes (PCN) and root knot nematodes, cutworms, and leaf
            minor and ume
          </p>

          <MyContainer>
            <ImageRow
              caption="tutambi"
              divDim="col-sm-3"
              src={image1}
            ></ImageRow>
            <ImageRow
              caption="tutambi"
              divDim="col-sm-3"
              src={image2}
            ></ImageRow>
            <ImageRow
              caption="gathua"
              divDim="col-sm-3"
              src={image3}
            ></ImageRow>
            <ImageRow
              caption="gathua"
              divDim="col-sm-3"
              src={image4}
            ></ImageRow>
          </MyContainer>

          <MyContainer>
            <ImageRow
              caption="twihuruta"
              divDim="col-sm-3"
              src={image5}
            ></ImageRow>
            <ImageRow
              caption="kigi"
              divDim="col-sm-3"
              src={image6}
            ></ImageRow>
            <ImageRow
              caption="Nematods"
              divDim="col-sm-3"
              src={image7}
            ></ImageRow>
            <ImageRow
              caption="Potato Cyst Nematodes (PCN)"
              divDim="col-sm-3"
              src={image8}
            ></ImageRow>
          </MyContainer>

          <MyContainer>
            <ImageRow
              caption="kigunyu"
              divDim="col-sm-4"
              src={image9}
            ></ImageRow>
            <ImageRow
              caption="kigunyu"
              divDim="col-sm-4"
              src={image10}
            ></ImageRow>
            <ImageRow
              caption="ume"
              divDim="col-sm-4"
              src={image11}
            ></ImageRow>
          </MyContainer>
          <p>
            <h5>njira cia kwigita tutambi</h5>

            <ul>
              <li>Mbegu hitukie</li>
              <li>
                Integrated Pest Management (IPM), kuhuthira waku mbere ya
                uhandite mimera miregani.
              </li>
              <li>Garurania na kuhanda mimera na Solanacea family</li>
              <li>Utheru wa mugunda , ugie na njira njega cia</li>
              <li>kweheria matigari ma mimera</li>
              <li>Kuhuhira dawa cia tutambi (Bio-T-Plus)</li>
            </ul>
            <PotatoeDiseaseManagementPrev></PotatoeDiseaseManagementPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <PotatoSideMenu></PotatoSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoePestManagementFullKik;

import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import ImageRow from "../../../layouts/Container/ImageRow";
import MyContainer from "../../../layouts/Container/MyContainer";
import PotatoeCropsManagementPrev from "../CropsManagement/PotatoeCropsManagementPrev";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import image1 from "../../../images/potatoes/4a.png";
import PotatoeCropsManagementPrevKik from "../CropsManagement/PotatoeCropsManagementPrevKik";

function PotatoeSoilFertilityFullKik() {
  return (
    <div>
      <PotatoHeader></PotatoHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Unoru wa tiri</h5>
            <hr></hr>
            Huthira ithimi cia Thumu kuringana na maumirira ma uria tiri uhana
            <ul>
              <li>Niguo waru waku ukure wega ongerera </li>
              <li>thumu na niguo waru waku ukure naihenya</li>
            </ul>{" "}
          </p>
          <MyContainer>
            <ImageRow
              caption="Flowering Stage"
              divDim="col-sm-6"
              src={image1}
            ></ImageRow>
          </MyContainer>
          <p>
            <PotatoeCropsManagementPrevKik/>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <PotatoSideMenu></PotatoSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PotatoeSoilFertilityFullKik;

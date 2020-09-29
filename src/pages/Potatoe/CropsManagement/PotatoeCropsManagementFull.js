import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoePestManagementPrev from "../PestManagement/PotatoePestManagementPrev";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoeCropsManagementFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Crop management</h5>
                        <hr></hr>
                        Earth-up when necessary 
Carry out crop rotation 
                        <ul>
                            <li>
                            Rotate after every 4 years with non-root and tuber crops, preferably cereals and legumes to break pest and disease cycle such as carrot and improved fallow either under Crotalaria ocroleuca or Leucaena and brassicas                            </li>
                            <li>
                            Earthing up should be done at 2-4 weeks after emergence to; enhance for tuber expansion, control potato weevil and prevent greening
                            </li>
                                  </ul>
                            <PotatoePestManagementPrev></PotatoePestManagementPrev>
          </p>
                </AppLeftSideContainer>
                <AppRightSideContainer>
                   <PotatoSideMenu></PotatoSideMenu>
                </AppRightSideContainer>
            </AppContainer>
        </div>
    );
}

export default PotatoeCropsManagementFull

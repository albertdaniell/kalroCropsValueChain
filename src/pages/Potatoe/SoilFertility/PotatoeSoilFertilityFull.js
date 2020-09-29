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
import image1 from '../../../images/potatoes/4a.png'

function PotatoeSoilFertilityFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Soil fertility</h5>
                        <hr></hr>
                        Apply required nutrients based on results of soil test/ analysis and on plant nutrient requirements
                        <ul>
                            <li>
                            Add manure and fertilizers to the soil in the right amounts to provide the required plant nutrients for vigorous crop growth
                            </li>
                                  </ul> </p>
                                  <MyContainer>
            <ImageRow divDim='col-sm-6' src={image1}></ImageRow>
            
            </MyContainer>
            <p>
                                  <PotatoeCropsManagementPrev></PotatoeCropsManagementPrev>
                            
          </p>
                </AppLeftSideContainer>
                <AppRightSideContainer>
                   <PotatoSideMenu></PotatoSideMenu>
                </AppRightSideContainer>
            </AppContainer>
        </div>
    );
}

export default PotatoeSoilFertilityFull

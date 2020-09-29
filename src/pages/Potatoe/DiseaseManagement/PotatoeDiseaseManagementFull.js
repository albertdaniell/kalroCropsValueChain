import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoeMaturityPrev from "../Maturity/PotatoeMaturityPrev";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoeDiseaseManagementFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Disease management</h5>
                        <hr></hr>
                        Bacterial diseases; late and early  blight, bacterial wilt, verticillium wilt, soft rot and black scurf 
Viral diseases; potato leaf roll and yellow virus, common scab, powdery scab and wart

<h5>Disease management strategies</h5>

                        <ul>
                            <li>Plant; resistant varieties, certified and clean seed</li>
                            <li>Conduct bacterial wilt and nematode (PCN) test are crucial before planting</li>
                            <li>IPM with enhanced scouting</li>
                            <li>Field sanitation/hygiene is more important; clean field, remove of harvest residues plant new fields away from old fields</li>
                            <li>Remove diseased plants</li>
                            <li>Do not use diseased plants in compost</li>
                            <li>Crop rotation with non-solanaceaous crops</li>
                            <li>Spray with recommended fungicides to control blight under IPM program</li>
                            <li>Test for bacterial wilt through KALRO or KEPHIS</li>
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

export default PotatoeDiseaseManagementFull

import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoePestManagementFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Pest management</h5>
                        <hr></hr>
                        Potato pests include; aphids, white flies, tuber moth, nematodes Potato Cyst Nematodes (PCN) and root knot nematodes, cutworms, and leaf minor and thrips

<h5>Pests control strategies</h5>

                        <ul>
                            <li>Certified seed</li>
                            <li>Test for potato cyst nematodes (PCN) on soils before planting</li>
                            <li>Integrated Pest Management (IPM), including use of repellents</li>
                            <li>Crop rotation to observed closed season for crops in Solanacea family</li>
                            <li>Field sanitation, including removing harvest residues</li>
                            <li>Organic pesticides (Bio-T-Plus)</li>
                                  </ul>
                            
          </p>
                </AppLeftSideContainer>
                <AppRightSideContainer>
                   <PotatoSideMenu></PotatoSideMenu>
                </AppRightSideContainer>
            </AppContainer>
        </div>
    );
}

export default PotatoePestManagementFull

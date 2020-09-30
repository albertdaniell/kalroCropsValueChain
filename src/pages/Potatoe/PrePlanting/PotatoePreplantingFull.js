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
import image1 from '../../../images/potatoes/2a.png'
import image2 from '../../../images/potatoes/2b.jpg'
function PotatoePreplantingFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Pre-Planting</h5>
                        <hr></hr>
                        <h6>Planting materials</h6>
                    Ensure to plant certified seeds
                        <h6>Certified seeds</h6>
                        <ul>
                            <li>Seeds should be obtained from dealers, where they have been well-graded and are uniform in size</li>
</ul>
                           </p>
                           <MyContainer>
            <ImageRow divDim='col-sm-6' src={image1}></ImageRow>
            <ImageRow divDim='col-sm-6' src={image2}></ImageRow>
            </MyContainer>
                           <p>
                            <ul>
                            <li>Since potato seed is too expensive, growers can use seed stock system</li>
                            <li>Planting materials should be well-adapted to emerging local climatic and environmental conditions</li>
                            <li>As an alternative option, establishment of raised beds for rooted cuttings or seed plot system that uses raised beds</li>
                           
                           
                             </ul>
                             <h6>Rooted cutting system</h6>
                             <ul>
                                 <li>A system that involves planting of rooted cuttings on raised beds at 30cm by 30cm which develops into small tubers that can be used for further multiplication for further use as seeds</li>
                                 
                             </ul>
                             <h6>Seed plot system</h6>
                             <ul>
                                 <li>
                                 A system of multiplying potatoes by planting the seeds on raised beds at 30cm by 30cm and harvesting for use as seeds after 3-4 months
                                 </li>
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

export default PotatoePreplantingFull

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
import image1 from '../../../images/potatoes/4b.jpg'
import image2 from '../../../images/potatoes/4c.jpg'
import image3 from '../../../images/potatoes/4d.png'
import image4 from '../../../images/potatoes/4e.jpg'
import image5 from '../../../images/potatoes/4f.jpg'
import image6 from '../../../images/potatoes/4g.jpg'
import image7 from '../../../images/potatoes/4h.jpg'
import image8 from '../../../images/potatoes/5a.jpg'
import image9 from '../../../images/potatoes/5b.png'
import image10 from '../../../images/potatoes/5c.jpg'
import image11 from '../../../images/potatoes/5d.jpg'









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

                        </p>

                        <MyContainer>
            <ImageRow caption='Aphids' divDim='col-sm-3' src={image1}></ImageRow>
            <ImageRow caption='Aphids' divDim='col-sm-3' src={image2}></ImageRow>
            <ImageRow caption='white flies' divDim='col-sm-3' src={image3}></ImageRow>
            <ImageRow caption='white flies' divDim='col-sm-3' src={image4}></ImageRow>
       
            </MyContainer>
           

            <MyContainer>
           
           <ImageRow caption='Tuber moth' divDim='col-sm-3' src={image5}></ImageRow>
           <ImageRow caption='Tuber moth' divDim='col-sm-3' src={image6}></ImageRow>
           <ImageRow caption='Nematods' divDim='col-sm-3' src={image7}></ImageRow>
           <ImageRow caption='Potato Cyst Nematodes (PCN)' divDim='col-sm-3' src={image8}></ImageRow>
           </MyContainer>

           <MyContainer>
           
           <ImageRow caption='Cutworms' divDim='col-sm-4' src={image9}></ImageRow>
           <ImageRow caption='Cutworms' divDim='col-sm-4' src={image10}></ImageRow>
           <ImageRow caption='Trips' divDim='col-sm-4' src={image11}></ImageRow>
           </MyContainer>
                        <p>

<h5>Pests control strategies</h5>

                        <ul>
                            <li>Certified seed</li>
                            <li>Test for potato cyst nematodes (PCN) on soils before planting</li>
                            <li>Integrated Pest Management (IPM), including use of repellents</li>
                            <li>Crop rotation to observed closed season for crops in Solanacea family</li>
                            <li>Field sanitation, including removing harvest residues</li>
                            <li>Organic pesticides (Bio-T-Plus)</li>
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

export default PotatoePestManagementFull

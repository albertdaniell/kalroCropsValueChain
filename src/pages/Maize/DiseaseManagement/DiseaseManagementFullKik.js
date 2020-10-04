import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import ImageRow from "../../../layouts/Container/ImageRow";
import MyContainer from "../../../layouts/Container/MyContainer";
import DiseaseManagementPrev from "../DiseaseManagement/DiseaseManagementPrev";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import MaturityPrev from "../Maturity/MaturityPrev";
import PlantingPrev from "../Planting/PlantingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";
import image1 from '../../../images/maize/6a.jpg'
import image2 from '../../../images/maize/6b.png'
import image3 from '../../../images/maize/6c.jpg'
import image4 from '../../../images/maize/6d.jpg'
import image5 from '../../../images/maize/6e.jpg'
import image6 from '../../../images/maize/6f.jpg'
import image7 from '../../../images/maize/7a.jpg'
import image8 from '../../../images/maize/7b.jpg'
import image9 from '../../../images/maize/7c.jpg'
import image10 from '../../../images/maize/7d.jpg'
import image11 from '../../../images/maize/7e.jpg'
import image12 from '../../../images/maize/7f.jpg'
import image13 from '../../../images/maize/7g.jpg'
import image14 from '../../../images/maize/7h.png'
import MaturityPrevKik from "../Maturity/MaturityPrevKik";






function DiseaseManagementFullKik() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kuhurana na mirimu </h5>
            <hr></hr>
         
            Mirimu ta; Head smut, Smut, Maize lethal necrosis disease (MLND), 
Maize streak virus, 
Northern leaf blight, Common rust, Grey leaf 
spot 
 
 </p>

<MyContainer>
            <ImageRow caption='Head smut' divDim='col-sm-3' src={image1} ></ImageRow>
            <ImageRow caption='Head smut' divDim='col-sm-3' src={image2} ></ImageRow>
            <ImageRow caption='smuts' divDim='col-sm-3' src={image3} ></ImageRow>
            <ImageRow caption='smut' divDim='col-sm-3' src={image4} ></ImageRow>
            

          </MyContainer>

          <MyContainer>
           
            
            <ImageRow caption='smut' divDim='col-sm-3' src={image5} ></ImageRow>
            <ImageRow caption='Maize Lethal Necrosis Disease (MLND)' divDim='col-sm-3' src={image6} ></ImageRow>
            <ImageRow caption='Maize streak virus' divDim='col-sm-3' src={image7} ></ImageRow>
            <ImageRow caption='Maize streak virus' divDim='col-sm-3' src={image8} ></ImageRow>

          </MyContainer>
          <MyContainer>
           
            <ImageRow caption='Northern leaf blight' divDim='col-sm-3' src={image9} ></ImageRow>
            <ImageRow caption='Northern leaf blight' divDim='col-sm-3' src={image10} ></ImageRow>
            <ImageRow caption='Common rust' divDim='col-sm-3' src={image11} ></ImageRow>
            <ImageRow caption='Common rust' divDim='col-sm-3' src={image12} ></ImageRow>

            

          </MyContainer>
          <MyContainer>
   
           <ImageRow caption='Grey leaf spot' divDim='col-sm-3' src={image13} ></ImageRow>
           <ImageRow caption='Grey leaf spot' divDim='col-sm-3' src={image14} ></ImageRow>

           

         </MyContainer>
<p>

            <h6>Mirimu ni ta ;</h6>
            NdutuHead smut (Sphacelotheca reiliana), Smut (Ustilago maydis), kubutha kwa mumea (MLND), gukua; Kuhia mbaa, `, Grey leaf spot
            <h6>Kuhurana na murimu</h6>

            <ul>
                <li>Handa mbegu hitukie ni mutaramu kana mbegu ciana uhoti wa kwigitia mirimu</li>
                <li>Cenjania mimera kwa mahinda</li>
                <li>Utheru wa mugunda</li>
                <li>Ngiririria tutambi ta mbuca</li>
                <li>Hutia dawa ya baa hitukie ni mutaramu</li>
           

            </ul>
          </p>

          <p>
            <h6>Next</h6>
      <MaturityPrevKik></MaturityPrevKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default DiseaseManagementFullKik;

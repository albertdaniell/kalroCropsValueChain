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
import PlantingPrev from "../Planting/PlantingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrev";
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";
import image1 from '../../../images/maize/4a.jpg'
import image2 from '../../../images/maize/4b.jpg'
import image3 from '../../../images/maize/4c.jpg'
import image4 from '../../../images/maize/4d.jpg'
import image5 from '../../../images/maize/4d.png'
import image6 from '../../../images/maize/4e.jpg'
import image7 from '../../../images/maize/4f.jpg'
import image8 from '../../../images/maize/5a.jpg'
import image9 from '../../../images/maize/5b.jpg'
import image10 from '../../../images/maize/5c.jpg'
import image11 from '../../../images/maize/5d.jpg'
import image12 from '../../../images/maize/5f.png'
import image13 from '../../../images/maize/5g.jpg'
import image14 from '../../../images/maize/5h.jpg'
import image15 from '../../../images/maize/5i.jpg'
import image16 from '../../../images/maize/5j.jpg'
import DiseaseManagementPrevKik from "../DiseaseManagement/DiseaseManagementPrevKik";





function PestManagementFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kuhurana na tutambi </h5>
            <hr></hr>
         
            Tutambi na inguyo mithemba miingi ta: mbucha, muthua, ndaahi na ingi nyingi
 
            <h6>Tutambi ni ta;</h6>
            Fall Armyworm (Spodoptera frugiperda), Armyworm (Spodoptera exempta), Maize stalk borer (Busseola fusca), Termites, Cutworms, Leaf miner, Moths, Beetles, Thrips, Grasshopper, Rodents (rats and mice), Weevils (Sytophylus zeameis) and Larger grain borer (Prostephanus truncatus).  </p>

<MyContainer>
            <ImageRow caption='Fall Armyworm' divDim='col-sm-3' src={image1} ></ImageRow>
            <ImageRow caption='Fall Armyworm' divDim='col-sm-3' src={image2} ></ImageRow>
            <ImageRow caption='Maize stalk borer' divDim='col-sm-3' src={image4} ></ImageRow>

          </MyContainer>

          <MyContainer>
            <ImageRow caption='Fall Armyworm' divDim='col-sm-4' src={image5} ></ImageRow>
            <ImageRow caption='Nguua' divDim='col-sm-4' src={image6} ></ImageRow>
            <ImageRow caption='Maize stalk borer' divDim='col-sm-4' src={image7} ></ImageRow>
            

          </MyContainer>

          <MyContainer>
            <ImageRow caption='Muthua' divDim='col-sm-4' src={image8} ></ImageRow>
            <ImageRow caption='Muthua' divDim='col-sm-4' src={image9} ></ImageRow>
            <ImageRow caption='Muthua' divDim='col-sm-4' src={image10} ></ImageRow>
            

          </MyContainer>


          <MyContainer>
            <ImageRow caption='Leaf miner' divDim='col-sm-4' src={image11} ></ImageRow>
            <ImageRow caption='Leaf miner' divDim='col-sm-4' src={image12} ></ImageRow>
            <ImageRow caption='Leaf miner' divDim='col-sm-4' src={image13} ></ImageRow>
            

          </MyContainer>

          <MyContainer>
            <ImageRow caption='mbuca' divDim='col-sm-4' src={image14} ></ImageRow>
            <ImageRow caption='Larger grain borer' divDim='col-sm-4' src={image15} ></ImageRow>
            <ImageRow caption='Larger grain borer' divDim='col-sm-4' src={image16} ></ImageRow>
            

          </MyContainer>

<p>

            <h6>Mutaratara wa kugiriria tutambi</h6>

            <ul>
                <li>Kuhiha ci mugunda na muigere wa mbembe mutheru</li>
                <li>Kuhanda na kugetha tene</li>
                <li>Kurinda mbembe</li>
                <li>Crop rotation</li>
                <li>Gucenjania mimea na imera</li>
                <li>Gutega mbia</li>
                <li>Huthira dawa hitukie ni mutaramu kuiga mbebe </li>

            </ul>
          </p>

          <p>
            <h6>Next</h6>
      <DiseaseManagementPrevKik></DiseaseManagementPrevKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default PestManagementFull;

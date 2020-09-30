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



function PestManagementFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Pests Management</h5>
            <hr></hr>
         
            Pests include, Fall Armyworm, Armyworm, Maize stalk borer, Termites, Cutworms, Leaf miner, Moths, Beetles, Thrips, Grasshopper, Rodents, Weevils and Larger grain borer

            <h6>Pests include</h6>
            Fall Armyworm (Spodoptera frugiperda), Armyworm (Spodoptera exempta), Maize stalk borer (Busseola fusca), Termites, Cutworms, Leaf miner, Moths, Beetles, Thrips, Grasshopper, Rodents (rats and mice), Weevils (Sytophylus zeameis) and Larger grain borer (Prostephanus truncatus).
</p>

<MyContainer>
            <ImageRow caption='Fall Armyworm' divDim='col-sm-3' src={image1} ></ImageRow>
            <ImageRow caption='Armyworm' divDim='col-sm-3' src={image2} ></ImageRow>
            <ImageRow caption='Maize stalk borer' divDim='col-sm-3' src={image3} ></ImageRow>
            <ImageRow caption='Maize stalk borer' divDim='col-sm-3' src={image4} ></ImageRow>

          </MyContainer>

          <MyContainer>
            <ImageRow caption='Fall Armyworm' divDim='col-sm-4' src={image5} ></ImageRow>
            <ImageRow caption='Armyworm' divDim='col-sm-4' src={image6} ></ImageRow>
            <ImageRow caption='Maize stalk borer' divDim='col-sm-4' src={image7} ></ImageRow>
            

          </MyContainer>

          <MyContainer>
            <ImageRow caption='Termites' divDim='col-sm-4' src={image8} ></ImageRow>
            <ImageRow caption='Termites' divDim='col-sm-4' src={image9} ></ImageRow>
            <ImageRow caption='Termites' divDim='col-sm-4' src={image10} ></ImageRow>
            

          </MyContainer>

<p>

            <h6>Pest Control strategy</h6>

            <ul>
                <li>Field sanitation and store hygiene</li>
                <li>Plant and harvest early</li>
                <li>Rogueing</li>
                <li>Crop rotation</li>
                <li>Push-pull technology and use of natural enemies</li>
                <li>Rat traps</li>
                <li>Use of appropriate insecticides as recommended by experts </li>

            </ul>
          </p>

          <p>
            <h6>Next</h6>
      <DiseaseManagementPrev></DiseaseManagementPrev>
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

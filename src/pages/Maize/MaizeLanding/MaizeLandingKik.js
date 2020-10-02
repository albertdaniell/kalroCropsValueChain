import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import ImageRow from "../../../layouts/Container/ImageRow";
import MyContainer from "../../../layouts/Container/MyContainer";
import CropsManagementPrev from "../CropsManagement/CropsManagementPrev";
import DiseaseManagementPrev from "../DiseaseManagement/DiseaseManagementPrev";
import HarvestingPrev from "../Harvesting/HarvestingPrev";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrevKik";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import MaturityPrev from "../Maturity/MaturityPrev";
import PestManagementPrev from "../PestManagement/PestManagementPrev";
import PlantingPrev from "../Planting/PlantingPrev";
import PostHarvestingPrev from "../PostHarvesting/PostHarvestingPrev";
import PrePlantingPrev from "../PrePlanting/PrePlantingPrevKik";
import ProcessingPrev from "../Processing/ProcessingPrev";
import SoilFertilityPrev from "../SoilFertility/SoilFertilityPrev";
import StoragePrev from "../Storage/StoragePrev";
import VarietiesPrev from "../Varieties/VarietiesPrev";
import WaterManagementPrev from "../WaterManagement/WaterManagementPrev";
import WeedManagementPrev from "../WeedManagement/WeedManagementPrev";
import image1 from '../../../images/maize/1a.jpg'
import image2 from '../../../images/maize/1b.jpg'
import SiteSelectionKikPrev from "../SiteSelection/SiteSelectionPrevKik";


function MaizeLanding() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
            <p>
                <h5>Kiambiriria</h5>
                <hr></hr>
               
                Maritwa maria mahuthagiruo Kenya (Mahindi, Oduma, Bando, Madumwa)
            </p>
          <p>
              <h5>Kwa ukuhi</h5>
              <hr></hr>
              
              Mbembe ni mumera wa bata bururi ini wa Kenya. Ni muthemba wa irio kuri nduriri nyingiutumikaga ta irio cia andu, irio cia mahiu, guthondeka indo cia kunyua na micakwe ta nguu cia guota. Mbembe ni muthemba miingi itganite kurigana kuria irakurio and mithimba ya tiiri na ugakoruo na mahinda matiganite magukura. Nariri, mbembe ikurga wega tiiri ini utari mai maingi, wina riera riinganu, tiiri muriku wina thumu wa kimerera  na ukongererwo thumu . mbembe ingikurio wega no igethwo tani igiri o hari acre ya mugunda urimitwo wega.
          </p>
          <MyContainer>
            <ImageRow divDim='col-sm-6' src={image1} ></ImageRow>
            <ImageRow divDim='col-sm-6' src={image2} ></ImageRow>

          </MyContainer>
          <p>
             <SiteSelectionKikPrev></SiteSelectionKikPrev>
              <LandPreparationPrev></LandPreparationPrev>
              <PrePlantingPrev></PrePlantingPrev>
              <VarietiesPrev></VarietiesPrev>
              <PlantingPrev></PlantingPrev>
              <WaterManagementPrev></WaterManagementPrev>
              <WeedManagementPrev></WeedManagementPrev>
              <SoilFertilityPrev></SoilFertilityPrev>
              <CropsManagementPrev></CropsManagementPrev>
              <PestManagementPrev></PestManagementPrev>
              <DiseaseManagementPrev></DiseaseManagementPrev>
              <MaturityPrev></MaturityPrev>
              <HarvestingPrev></HarvestingPrev>
              <StoragePrev></StoragePrev>
              <PostHarvestingPrev></PostHarvestingPrev>
              <ProcessingPrev></ProcessingPrev>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
            <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default MaizeLanding;

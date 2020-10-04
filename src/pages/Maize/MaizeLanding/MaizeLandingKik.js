import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import ImageRow from "../../../layouts/Container/ImageRow";
import MyContainer from "../../../layouts/Container/MyContainer";
import LandPreparationPrevKik from "../LandPreparation/LandPreparationPrevKik";
import MaizeHeader from "../MaizeHeader/MaizeHeader";
import PestManagementPrevKik from "../PestManagement/PestManagementPrevKik";
import image1 from '../../../images/maize/1a.jpg'
import image2 from '../../../images/maize/1b.jpg'
import VarietiesPrevKik from "../Varieties/VarietiesPrevKik";
import PrePlantingPrevKik from "../PrePlanting/PrePlantingPrevKik";
import SiteSelectionKikPrevKik from "../SiteSelection/SiteSelectionPrevKik";
import WaterManagementPrevKik from "../WaterManagement/WaterManagementPrevKik";
import WeedManagementPrevKik from "../WeedManagement/WeedManagementPrevKik";
import SoilFertilityPrevKik from "../SoilFertility/SoilFertilityPrevKik";
import CropsManagementPrevKik from "../CropsManagement/CropsManagementPrevKik";
import DiseaseManagementPrevKik from "../DiseaseManagement/DiseaseManagementPrevKik";
import MaturityPrevKik from "../Maturity/MaturityPrevKik";
import HarvestingPrevKik from "../Harvesting/HarvestingPrevKik";
import StoragePrevKik from "../Storage/StoragePrevKik";
import PostHarvestingPrevKik from "../PostHarvesting/PostHarvestingPrevKik";
import ProcessingPrevKik from "../Processing/ProcessingPrevKik";


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
             <SiteSelectionKikPrevKik></SiteSelectionKikPrevKik>
              <LandPreparationPrevKik></LandPreparationPrevKik>
              <PrePlantingPrevKik></PrePlantingPrevKik>
              <VarietiesPrevKik></VarietiesPrevKik>
              <PrePlantingPrevKik></PrePlantingPrevKik>
              <WaterManagementPrevKik></WaterManagementPrevKik>
              <WeedManagementPrevKik></WeedManagementPrevKik>
              <SoilFertilityPrevKik></SoilFertilityPrevKik>
              <CropsManagementPrevKik></CropsManagementPrevKik>
              <PestManagementPrevKik></PestManagementPrevKik>
              <DiseaseManagementPrevKik></DiseaseManagementPrevKik>
              <MaturityPrevKik></MaturityPrevKik>
              <HarvestingPrevKik></HarvestingPrevKik>
              <StoragePrevKik></StoragePrevKik>
              <PostHarvestingPrevKik></PostHarvestingPrevKik>
              <ProcessingPrevKik></ProcessingPrevKik>
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

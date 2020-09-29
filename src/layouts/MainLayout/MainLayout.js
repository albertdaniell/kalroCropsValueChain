import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BeansLanding from "../../pages/Beans/BeansLanding/BeansLanding";
import BeansCropsManagementFull from "../../pages/Beans/CropsManagement/BeansCropsManagementFull";
import BeansHarvestingFull from "../../pages/Beans/Harvesting/BeansHarvestingFull";
import BeansLandPreparationFull from "../../pages/Beans/LandPreparation/BeansLandPreparationFull";
import BeansMaturityFull from "../../pages/Beans/Maturity/BeansMaturityFull";
import BeansPestManagementFull from "../../pages/Beans/PestManagement/BeansPestManagementFull";
import BeansPlantingFull from "../../pages/Beans/Planting/BeansPlantingFull";
import BeansPreplantingFull from "../../pages/Beans/PrePlanting/BeansPreplantingFull";
import BeansSiteSelection from "../../pages/Beans/SiteSelection/BeansSiteSelection";
import BeansSiteSelectionFull from "../../pages/Beans/SiteSelection/BeansSiteSelectionFull";
import BeansSoilFertilityFull from "../../pages/Beans/SoilFertility/BeansSoilFertilityFull";
import BeansStorageFull from "../../pages/Beans/Storage/BeansStorageFull";
import BeansVarietiesFull from "../../pages/Beans/Varieties/BeansVarietiesFull";
import BeansWaterManagementFull from "../../pages/Beans/WaterManagement/BeansWaterManagementFull";
import BeansWeedManagementFull from "../../pages/Beans/WeedManagement/BeansWeedManagementFull";
import CropManagementFull from "../../pages/Maize/CropsManagement/CropManagementFull";
import DiseaseManagementFull from "../../pages/Maize/DiseaseManagement/DiseaseManagementFull";
import HarvestingFull from "../../pages/Maize/Harvesting/HarvestingFull";
import LandPreparationFull from "../../pages/Maize/LandPreparation/LandPreparationFull";
import MaizeLanding from "../../pages/Maize/MaizeLanding/MaizeLanding";
import MaturityFull from "../../pages/Maize/Maturity/MaturityFull";
import PestManagementFull from "../../pages/Maize/PestManagement/PestManagementFull";
import PlantingFull from "../../pages/Maize/Planting/PlantingFull";
import PostHarvestingFull from "../../pages/Maize/PostHarvesting/PostHarvestingFull";
import PrePlantingFullFull from "../../pages/Maize/PrePlanting/PrePlantingFull";
import ProcessingFull from "../../pages/Maize/Processing/ProcessingFull";
import SiteSelectionFull from "../../pages/Maize/SiteSelection/SiteSelectionFull";
import SoilFertiltyFull from "../../pages/Maize/SoilFertility/SoilFertilityFull";
import StorageFull from "../../pages/Maize/Storage/StorageFull";
import VarietiesFull from "../../pages/Maize/Varieties/VarietiesFull";
import WaterManagementFull from "../../pages/Maize/WaterManagement/WaterManagementFull";
import WeedManagementFull from "../../pages/Maize/WeedManagement/WeedManagementFull";
import PotatoeCropsManagementFull from "../../pages/Potatoe/CropsManagement/PotatoeCropsManagementFull";
import PotatoeDiseaseManagementFull from "../../pages/Potatoe/DiseaseManagement/PotatoeDiseaseManagementFull";
import PotatoeHarvestingFull from "../../pages/Potatoe/Harvesting/PotatoeHarvestingFull";
import PotatoeLandPreparationFull from "../../pages/Potatoe/LandPreparation/PotatoeLandPreparationFull";
import PotatoeMaturityFull from "../../pages/Potatoe/Maturity/PotatoeMaturityFull";
import PotatoePestManagementFull from "../../pages/Potatoe/PestManagement/PotatoePestManagementFull";
import PotatoePlantingFull from "../../pages/Potatoe/Planting/PotatoePlantingFull";
import PotatoePostHarvestingFull from "../../pages/Potatoe/PostHarvesting/PotatoePostHarvestingFull";

import PotatoLanding from "../../pages/Potatoe/PotatoLanding/PotatoLanding";
import PotatoePreplantingFull from "../../pages/Potatoe/PrePlanting/PotatoePreplantingFull";
import PotatoePrePlantingPrev from "../../pages/Potatoe/PrePlanting/PotatoePrePlantingPrev";
import PotatoeProcessingFull from "../../pages/Potatoe/Processing/PotatoeProcessingFull";
import PotatoeSiteSelectionFull from "../../pages/Potatoe/SiteSelection/PotatoeSiteSelectionFull";
import PotatoeSoilFertilityFull from "../../pages/Potatoe/SoilFertility/PotatoeSoilFertilityFull";
import PotatoeStorageFull from "../../pages/Potatoe/Storage/PotatoeStorageFull";
import PotatoVarietyFull from "../../pages/Potatoe/Varieties/PotatoVarietyFull";
import PotatoeWaterManagementFull from "../../pages/Potatoe/WaterManagement/PotatoeWaterManagementFull";
import PotatoWeedManagementFul from "../../pages/Potatoe/WeedManagement/PotatoWeedManagementFul";

import ErrorPage from "../ErrorPage/ErrorPage";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function MainLayout(props) {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={MaizeLanding} />
            <Route
              exact
              path="/maizeSiteSelection"
              component={SiteSelectionFull}
            />
            <Route
              exact
              path="/maizeLandPreparation"
              component={LandPreparationFull}
            />
            <Route
              exact
              path="/maizePreplanting"
              component={PrePlantingFullFull}
            />
            <Route exact path="/maizeVarieties" component={VarietiesFull} />
            <Route exact path="/maizePlanting" component={PlantingFull} />
            <Route
              exact
              path="/maizeWaterManagement"
              component={WaterManagementFull}
            />
            <Route
              exact
              path="/maizeWeedManagement"
              component={WeedManagementFull}
            />
            <Route
              exact
              path="/maizeCropManagement"
              component={CropManagementFull}
            />
            <Route
              exact
              path="/maizeSoilFertility"
              component={SoilFertiltyFull}
            />
            <Route
              exact
              path="/maizePestManagement"
              component={PestManagementFull}
            />
            <Route
              exact
              path="/maizeDiseaseManagement"
              component={DiseaseManagementFull}
            />
            <Route exact path="/maizeMaturity" component={MaturityFull} />
            <Route exact path="/maizeHarvesting" component={HarvestingFull} />
            <Route exact path="/maizeStorage" component={StorageFull} />
            <Route
              exact
              path="/maizePostHarvest"
              component={PostHarvestingFull}
            />
            <Route exact path="/maizeProcessing" component={ProcessingFull} />
            

            <Route
              path="/poultryApp"
              component={() => {
                window.location.href =
                  "http://cryptic-plateau-32981.herokuapp.com/";
                return null;
              }}
            />

            <Route
              path="/dairyGoatApp"
              component={() => {
                window.location.href = "https://dairy-goat.herokuapp.com/";
                return null;
              }}
            />

            {/* Beans */}
            <Route exact path="/beansLanding" component={BeansLanding} />
            <Route exact path="/beansSiteSelection" component={BeansSiteSelectionFull} />
            <Route exact path="/beansLandPreparation" component={BeansLandPreparationFull} />
            <Route exact path="/beansPrePlanting" component={BeansPreplantingFull} />
            <Route exact path="/beansVarieties" component={BeansVarietiesFull} />
            <Route exact path="/beansPlanting" component={BeansPlantingFull} />
            <Route exact path="/beanswaterManagement" component={BeansWaterManagementFull} />
            <Route exact path="/beansweedManagement" component={BeansWeedManagementFull} />
            <Route exact path="/beansSoilFertility" component={BeansSoilFertilityFull} />
            <Route exact path="/beansCropsManagement" component={BeansCropsManagementFull} />
            <Route exact path="/beansPestsManagement" component={BeansPestManagementFull} />
            <Route exact path="/beansDiseaseManagement" component={DiseaseManagementFull} />
            <Route exact path="/beansMaturity" component={BeansMaturityFull} />
            <Route exact path="/beansHarvesting" component={BeansHarvestingFull} />
            <Route exact path="/beansStorage" component={BeansStorageFull} />

            {/* Potato routes */}
            <Route exact path="/potatoLanding" component={PotatoLanding} />
            <Route exact path="/potatoSiteSelection" component={PotatoeSiteSelectionFull} />
            <Route exact path="/potatolandPreparation" component={PotatoeLandPreparationFull} />
            <Route exact path="/potatoPreplanting" component={PotatoePreplantingFull} />
            <Route exact path="/potatoVariety" component={PotatoVarietyFull} />
            <Route exact path="/potatoPlanting" component={PotatoePlantingFull} />
            <Route exact path="/potatowaterManagement" component={PotatoeWaterManagementFull} />
            <Route exact path="/potatoweedManagement" component={PotatoWeedManagementFul} />
            <Route exact path="/potatosoilFertility" component={PotatoeSoilFertilityFull} />
            <Route exact path="/potatoCropManagement" component={PotatoeCropsManagementFull} />
            <Route exact path="/potatoPestManagement" component={PotatoePestManagementFull} />
            <Route exact path="/potatoDiseaseManagement" component={PotatoeDiseaseManagementFull} />
            <Route exact path="/potatoMaturity" component={PotatoeMaturityFull} />
            <Route exact path="/potatoHarvesting" component={PotatoeHarvestingFull} />
            <Route exact path="/potatoStorage" component={PotatoeStorageFull} />
            <Route exact path="/potatopostHarvest" component={PotatoePostHarvestingFull} />
            <Route exact path="/potatoProcessing" component={PotatoeProcessingFull} />









            

            













            











            <Route path="*" component={ErrorPage} />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default MainLayout;

import React, { useContext,Suspense,lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext/AppContext";
import BeansLandingKik from "../../pages/Beans/BeansLanding/BeansLandingKik";
import BeansCropsManagementFullKik from "../../pages/Beans/CropsManagement/BeansCropsManagementFullKik";
import BeansDiseaseManagementFullKik from "../../pages/Beans/DiseaseManagement/BeansDiseaseManagementFullKik";
import BeansHarvestingFullKik from "../../pages/Beans/Harvesting/BeansHarvestingFullKik";
import BeansLandPreparationFullKik from "../../pages/Beans/LandPreparation/BeansLandPreparationFullKik";
import BeansMaturityFullKik from "../../pages/Beans/Maturity/BeansMaturityFullKik";
import BeansPestManagementFullKik from "../../pages/Beans/PestManagement/BeansPestManagementFullKik";
import BeansPlantingFullKik from "../../pages/Beans/Planting/BeansPlantingFullKik";
import BeansPreplantingFullKik from "../../pages/Beans/PrePlanting/BeansPreplantingFullKik";
import BeansSiteSelectionFullKik from "../../pages/Beans/SiteSelection/BeansSiteSelectionFullKik";
import BeansSoilFertilityFullKik from "../../pages/Beans/SoilFertility/BeansSoilFertilityFullKik";
import BeansStorageFullKik from "../../pages/Beans/Storage/BeansStorageFullKik";
import BeansVarietiesFullKik from "../../pages/Beans/Varieties/BeansVarietiesFullKik";
import BeansWaterManagementFullKik from "../../pages/Beans/WaterManagement/BeansWaterManagementFullKik";
import BeansWeedManagementFullKik from "../../pages/Beans/WeedManagement/BeansWeedManagementFullKik";
import PotatoeCropsManagementFullKik from "../../pages/Potatoe/CropsManagement/PotatoeCropsManagementFullKik";
import PotatoeDiseaseManagementFullKik from "../../pages/Potatoe/DiseaseManagement/PotatoeDiseaseManagementFullKik";
import PotatoeHarvestingFullKik from "../../pages/Potatoe/Harvesting/PotatoeHarvestingFullKik";
import PotatoeLandPreparationFullKik from "../../pages/Potatoe/LandPreparation/PotatoeLandPreparationFullKik";
import PotatoeMaturityFullKik from "../../pages/Potatoe/Maturity/PotatoeMaturityFullKik";
import PotatoePestManagementFullKik from "../../pages/Potatoe/PestManagement/PotatoePestManagementFullKik";
import PotatoePlantingFullKik from "../../pages/Potatoe/Planting/PotatoePlantingFullKik";
import PotatoePostHarvestingFullKik from "../../pages/Potatoe/PostHarvesting/PotatoePostHarvestingFullKik";
import PotatoLandingKik from "../../pages/Potatoe/PotatoLanding/PotatoLandingKik";
import PotatoePreplantingFullKik from "../../pages/Potatoe/PrePlanting/PotatoePreplantingFullKik";
import PotatoeProcessingFullKik from "../../pages/Potatoe/Processing/PotatoeProcessingFullKik";
import PotatoeSiteSelectionFullKik from "../../pages/Potatoe/SiteSelection/PotatoeSiteSelectionFullKik";
import PotatoeSoilFertilityFullKik from "../../pages/Potatoe/SoilFertility/PotatoeSoilFertilityFullKik";
import PotatoeStorageFullKik from "../../pages/Potatoe/Storage/PotatoeStorageFullKik";
import PotatoVarietyFullKik from "../../pages/Potatoe/Varieties/PotatoVarietyFullKik";
import PotatoeWaterManagementFullKik from "../../pages/Potatoe/WaterManagement/PotatoeWaterManagementFullKik";
import PotatoWeedManagementFullKik from "../../pages/Potatoe/WeedManagement/PotatoWeedManagementFulKik";
const MaizeLanding=React.lazy(()=>import('../../pages/Maize/MaizeLanding/MaizeLandingKik'));

const CropManagementFull =lazy(()=>import("../../pages/Maize/CropsManagement/CropManagementFullKik")) ;
const DiseaseManagementFull =lazy(()=>import( "../../pages/Maize/DiseaseManagement/DiseaseManagementFullKik"));
const HarvestingFull =lazy(()=>import("../../pages/Maize/Harvesting/HarvestingFullKik")) ;
const LandPreparationFull =lazy(()=>import("../../pages/Maize/LandPreparation/LandPreparationFullKik")) ;

const MaturityFull =lazy(()=>import("../../pages/Maize/Maturity/MaturityFullKik")) ;
const PestManagementFull =lazy(()=>import("../../pages/Maize/PestManagement/PestManagementFullKik")) ;
const PlantingFull =lazy(()=>import( "../../pages/Maize/Planting/PlantingFullKik"));
const PostHarvestingFull =lazy(()=>import("../../pages/Maize/PostHarvesting/PostHarvestingFullKik")) ;
const PrePlantingFullFull =lazy(()=>import("../../pages/Maize/PrePlanting/PrePlantingFullKik")) ;
const ProcessingFull =lazy(()=>import("../../pages/Maize/Processing/ProcessingFullKik")) ;
const SiteSelectionFull =lazy(()=>import("../../pages/Maize/SiteSelection/SiteSelectionFullKik")) ;
const SoilFertiltyFull =lazy(()=>import("../../pages/Maize/SoilFertility/SoilFertilityFullKik")) ;
const StorageFull =lazy(()=>import("../../pages/Maize/Storage/StorageFullKik")) ;
const VarietiesFull =lazy(()=>import("../../pages/Maize/Varieties/VarietiesFullKik")) ;
const WaterManagementFull =lazy(()=>import("../../pages/Maize/WaterManagement/WaterManagementFullKik")) ;
const WeedManagementFull =lazy(()=>import("../../pages/Maize/WeedManagement/WeedManagementFullKik")) ;
const PotatoeCropsManagementFull =lazy(()=>import("../../pages/Potatoe/CropsManagement/PotatoeCropsManagementFull")) ;
const PotatoeDiseaseManagementFull =lazy(()=>import("../../pages/Potatoe/DiseaseManagement/PotatoeDiseaseManagementFull")) ;
const PotatoeHarvestingFull =lazy(()=>import("../../pages/Potatoe/Harvesting/PotatoeHarvestingFull")) ;
const PotatoeLandPreparationFull =lazy(()=>import("../../pages/Potatoe/LandPreparation/PotatoeLandPreparationFull")) ;
const PotatoeMaturityFull =lazy(()=>import("../../pages/Potatoe/Maturity/PotatoeMaturityFull")) ;
const PotatoePestManagementFull =lazy(()=>import("../../pages/Potatoe/PestManagement/PotatoePestManagementFull")) ;
const PotatoePlantingFull =lazy(()=>import("../../pages/Potatoe/Planting/PotatoePlantingFull")) ;
const PotatoePostHarvestingFull =lazy(()=>import("../../pages/Potatoe/PostHarvesting/PotatoePostHarvestingFull")) ;

const PotatoLanding =lazy(()=>import("../../pages/Potatoe/PotatoLanding/PotatoLanding")) ;
const PotatoePreplantingFull =lazy(()=>import("../../pages/Potatoe/PrePlanting/PotatoePreplantingFull")) ;
const PotatoeProcessingFull =lazy(()=>import("../../pages/Potatoe/Processing/PotatoeProcessingFull")) ;
const PotatoeSiteSelectionFull =lazy(()=>import("../../pages/Potatoe/SiteSelection/PotatoeSiteSelectionFull")) ;
const PotatoeSoilFertilityFull =lazy(()=>import("../../pages/Potatoe/SoilFertility/PotatoeSoilFertilityFull")) ;
const PotatoeStorageFull =lazy(()=>import("../../pages/Potatoe/Storage/PotatoeStorageFull")) ;
const PotatoVarietyFull =lazy(()=>import("../../pages/Potatoe/Varieties/PotatoVarietyFull")) ;
const PotatoeWaterManagementFull =lazy(()=>import("../../pages/Potatoe/WaterManagement/PotatoeWaterManagementFull")) ;
const PotatoWeedManagementFul =lazy(()=>import("../../pages/Potatoe/WeedManagement/PotatoWeedManagementFul")) ;

const ErrorPage =lazy(()=>import("../../layouts/ErrorPage/ErrorPage")) ;
const ScrollToTop =lazy(()=>import("../../layouts/ScrollToTop/ScrollToTop")) ;

function KikuyuRoutes() {
    return (
        <div>
             <Router>
  <Suspense fallback={<div style={{textAlign:'center',marginTop:'40%'}}>Loading App...Plase Wait.{}</div>}>
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
            <Route exact path="/beansLanding" component={BeansLandingKik} />
            <Route exact path="/beansSiteSelection" component={BeansSiteSelectionFullKik} />
            <Route exact path="/beansLandPreparation" component={BeansLandPreparationFullKik} />
            <Route exact path="/beansPrePlanting" component={BeansPreplantingFullKik} />
            <Route exact path="/beansVarieties" component={BeansVarietiesFullKik} />
            <Route exact path="/beansPlanting" component={BeansPlantingFullKik} />
            <Route exact path="/beanswaterManagement" component={BeansWaterManagementFullKik} />
            <Route exact path="/beansweedManagement" component={BeansWeedManagementFullKik} />
            <Route exact path="/beansSoilFertility" component={BeansSoilFertilityFullKik} />
            <Route exact path="/beansCropsManagement" component={BeansCropsManagementFullKik} />
            <Route exact path="/beansPestsManagement" component={BeansPestManagementFullKik} />
            <Route exact path="/beansDiseaseManagement" component={BeansDiseaseManagementFullKik} />
            <Route exact path="/beansMaturity" component={BeansMaturityFullKik} />
            <Route exact path="/beansHarvesting" component={BeansHarvestingFullKik} />
            <Route exact path="/beansStorage" component={BeansStorageFullKik} />

            {/* Potato routes */}
            <Route exact path="/potatoLanding" component={PotatoLandingKik} />
            <Route exact path="/potatoSiteSelection" component={PotatoeSiteSelectionFullKik} />
            <Route exact path="/potatolandPreparation" component={PotatoeLandPreparationFullKik} />
            <Route exact path="/potatoPreplanting" component={PotatoePreplantingFullKik} />
            <Route exact path="/potatoVariety" component={PotatoVarietyFullKik} />
            <Route exact path="/potatoPlanting" component={PotatoePlantingFullKik} />
            <Route exact path="/potatowaterManagement" component={PotatoeWaterManagementFullKik} />
            <Route exact path="/potatoweedManagement" component={PotatoWeedManagementFullKik} />
            <Route exact path="/potatosoilFertility" component={PotatoeSoilFertilityFullKik} />
            <Route exact path="/potatoCropManagement" component={PotatoeCropsManagementFullKik} />
            <Route exact path="/potatoPestManagement" component={PotatoePestManagementFullKik} />
            <Route exact path="/potatoDiseaseManagement" component={PotatoeDiseaseManagementFullKik} />
            <Route exact path="/potatoMaturity" component={PotatoeMaturityFullKik} />
            <Route exact path="/potatoHarvesting" component={PotatoeHarvestingFullKik} />
            <Route exact path="/potatoStorage" component={PotatoeStorageFullKik} />
            <Route exact path="/potatopostHarvest" component={PotatoePostHarvestingFullKik} />
            <Route exact path="/potatoProcessing" component={PotatoeProcessingFullKik} />









  



            <Route path="*" component={ErrorPage} />
          </Switch>
        </ScrollToTop>
        </Suspense>
      </Router>
        </div>
    )
}

export default KikuyuRoutes

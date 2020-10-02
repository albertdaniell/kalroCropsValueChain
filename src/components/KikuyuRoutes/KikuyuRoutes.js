import React, { useContext,Suspense,lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext/AppContext";
import BeansDiseaseManagementFull from "../../pages/Beans/DiseaseManagement/BeansDiseaseManagementFull";
const MaizeLanding=React.lazy(()=>import('../../pages/Maize/MaizeLanding/MaizeLandingKik'));
const BeansLanding =lazy(()=>import('../../pages/Beans/BeansLanding/BeansLanding'));
const BeansCropsManagementFull=lazy(()=>import( "../../pages/Beans/CropsManagement/BeansCropsManagementFull"));
const BeansHarvestingFull =lazy(()=>import("../../pages/Beans/Harvesting/BeansHarvestingFull"));
const BeansLandPreparationFull =lazy(()=>import("../../pages/Beans/LandPreparation/BeansLandPreparationFull"));
const BeansMaturityFull =lazy(()=>import("../../pages/Beans/Maturity/BeansMaturityFull"));
const BeansPestManagementFull =lazy(()=>import("../../pages/Beans/PestManagement/BeansPestManagementFull"));
const BeansPlantingFull =lazy(()=>import( "../../pages/Beans/Planting/BeansPlantingFull"));
const BeansPreplantingFull =lazy(()=>import("../../pages/Beans/PrePlanting/BeansPreplantingFull")) ;
const BeansSiteSelection =lazy(()=>import("../../pages/Beans/SiteSelection/BeansSiteSelection")) ;
const BeansSiteSelectionFull =lazy(()=>import( "../../pages/Beans/SiteSelection/BeansSiteSelectionFull"));
const BeansSoilFertilityFull =lazy(()=>import("../../pages/Beans/SoilFertility/BeansSoilFertilityFull")) ;
const BeansStorageFull =lazy(()=>import( "../../pages/Beans/Storage/BeansStorageFull"));
const BeansVarietiesFull =lazy(()=>import("../../pages/Beans/Varieties/BeansVarietiesFull")) ;
const BeansWaterManagementFull =lazy(()=>import("../../pages/Beans/WaterManagement/BeansWaterManagementFull")) ;
const BeansWeedManagementFull =lazy(()=>import("../../pages/Beans/WeedManagement/BeansWeedManagementFull")) ;
const CropManagementFull =lazy(()=>import("../../pages/Maize/CropsManagement/CropManagementFull")) ;
const DiseaseManagementFull =lazy(()=>import( "../../pages/Maize/DiseaseManagement/DiseaseManagementFull"));
const HarvestingFull =lazy(()=>import("../../pages/Maize/Harvesting/HarvestingFull")) ;
const LandPreparationFull =lazy(()=>import("../../pages/Maize/LandPreparation/LandPreparationFullKik")) ;

const MaturityFull =lazy(()=>import("../../pages/Maize/Maturity/MaturityFull")) ;
const PestManagementFull =lazy(()=>import("../../pages/Maize/PestManagement/PestManagementFull")) ;
const PlantingFull =lazy(()=>import( "../../pages/Maize/Planting/PlantingFull"));
const PostHarvestingFull =lazy(()=>import("../../pages/Maize/PostHarvesting/PostHarvestingFull")) ;
const PrePlantingFullFull =lazy(()=>import("../../pages/Maize/PrePlanting/PrePlantingFullKik")) ;
const ProcessingFull =lazy(()=>import("../../pages/Maize/Processing/ProcessingFull")) ;
const SiteSelectionFull =lazy(()=>import("../../pages/Maize/SiteSelection/SiteSelectionFullKik")) ;
const SoilFertiltyFull =lazy(()=>import("../../pages/Maize/SoilFertility/SoilFertilityFull")) ;
const StorageFull =lazy(()=>import("../../pages/Maize/Storage/StorageFull")) ;
const VarietiesFull =lazy(()=>import("../../pages/Maize/Varieties/VarietiesFull")) ;
const WaterManagementFull =lazy(()=>import("../../pages/Maize/WaterManagement/WaterManagementFull")) ;
const WeedManagementFull =lazy(()=>import("../../pages/Maize/WeedManagement/WeedManagementFull")) ;
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
const PotatoePrePlantingPrev =lazy(()=>import("../../pages/Potatoe/PrePlanting/PotatoePrePlantingPrev")) ;
const PotatoeProcessingFull =lazy(()=>import("../../pages/Potatoe/Processing/PotatoeProcessingFull")) ;
const PotatoeSiteSelectionFull =lazy(()=>import("../../pages/Potatoe/SiteSelection/PotatoeSiteSelectionFull")) ;
const PotatoeSoilFertilityFull =lazy(()=>import("../../pages/Potatoe/SoilFertility/PotatoeSoilFertilityFull")) ;
const PotatoeStorageFull =lazy(()=>import("../../pages/Potatoe/Storage/PotatoeStorageFull")) ;
const PotatoVarietyFull =lazy(()=>import("../../pages/Potatoe/Varieties/PotatoVarietyFull")) ;
const PotatoeWaterManagementFull =lazy(()=>import("../../pages/Potatoe/WaterManagement/PotatoeWaterManagementFull")) ;
const PotatoWeedManagementFul =lazy(()=>import("../../pages/Potatoe/WeedManagement/PotatoWeedManagementFul")) ;

const ErrorPage =lazy(()=>import("../../layouts/ErrorPage/ErrorPage")) ;
const ScrollToTop =lazy(()=>import("../../layouts/ScrollToTop/ScrollToTop")) ;
const Loading =lazy(()=>import("../../components/Loading/Loading")) ;

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
            <Route exact path="/beansDiseaseManagement" component={BeansDiseaseManagementFull} />
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
        </Suspense>
      </Router>
        </div>
    )
}

export default KikuyuRoutes

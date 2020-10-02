import React, { useContext,Suspense,lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext/AppContext";
import EnglishRoute from "../../components/EnglishRoutes/EnglishRoutes";
import KikuyuRoute from "../../components/KikuyuRoutes/KikuyuRoutes";
import BeansDiseaseManagementFull from "../../pages/Beans/DiseaseManagement/BeansDiseaseManagementFull";
const MaizeLanding=React.lazy(()=>import('../../pages/Maize/MaizeLanding/MaizeLanding'));
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
const LandPreparationFull =lazy(()=>import("../../pages/Maize/LandPreparation/LandPreparationFull")) ;

const MaturityFull =lazy(()=>import("../../pages/Maize/Maturity/MaturityFull")) ;
const PestManagementFull =lazy(()=>import("../../pages/Maize/PestManagement/PestManagementFull")) ;
const PlantingFull =lazy(()=>import( "../../pages/Maize/Planting/PlantingFull"));
const PostHarvestingFull =lazy(()=>import("../../pages/Maize/PostHarvesting/PostHarvestingFull")) ;
const PrePlantingFullFull =lazy(()=>import("../../pages/Maize/PrePlanting/PrePlantingFull")) ;
const ProcessingFull =lazy(()=>import("../../pages/Maize/Processing/ProcessingFull")) ;
const SiteSelectionFull =lazy(()=>import("../../pages/Maize/SiteSelection/SiteSelectionFull")) ;
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

const ErrorPage =lazy(()=>import("../ErrorPage/ErrorPage")) ;
const ScrollToTop =lazy(()=>import("../ScrollToTop/ScrollToTop")) ;
const Loading =lazy(()=>import("../../components/Loading/Loading")) ;

function MainLayout(props) {
  const { appLanguage,isloading } = useContext(AppContext);
  if (appLanguage === "1") {
    return (
     <EnglishRoute></EnglishRoute>
    );
  } else {
    return (
      <KikuyuRoute></KikuyuRoute>
    );
  }

}
export default MainLayout;

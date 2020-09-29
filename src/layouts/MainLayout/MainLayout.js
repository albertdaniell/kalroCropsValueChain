import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BeansLanding from "../../pages/Beans/BeansLanding/BeansLanding";
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


            <Route path="*" component={ErrorPage} />
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default MainLayout;

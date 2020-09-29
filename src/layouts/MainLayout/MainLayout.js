import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CropManagementFull from "../../pages/Maize/CropsManagement/CropManagementFull";
import LandPreparationFull from "../../pages/Maize/LandPreparation/LandPreparationFull";
import MaizeLanding from "../../pages/Maize/MaizeLanding/MaizeLanding";
import PlantingFull from "../../pages/Maize/Planting/PlantingFull";
import PrePlantingFullFull from "../../pages/Maize/PrePlanting/PrePlantingFull";
import SiteSelectionFull from "../../pages/Maize/SiteSelection/SiteSelectionFull";
import SoilFertiltyFull from "../../pages/Maize/SoilFertility/SoilFertilityFull";
import VarietiesFull from "../../pages/Maize/Varieties/VarietiesFull";
import WaterManagementFull from "../../pages/Maize/WaterManagement/WaterManagementFull";
import WeedManagementFull from "../../pages/Maize/WeedManagement/WeedManagementFull";
import ErrorPage from "../ErrorPage/ErrorPage";
import ScrollToTop from "../ScrollToTop/ScrollToTop";



function MainLayout(props) {
  
  return(

    <>
     <Router>
<ScrollToTop>

<Switch>
              <Route exact path="/" component={MaizeLanding} />
              <Route exact path="/maizeSiteSelection" component={SiteSelectionFull} />
              <Route exact path="/maizeLandPreparation" component={LandPreparationFull} />
              <Route exact path="/maizePreplanting" component={PrePlantingFullFull} />
              <Route exact path="/maizeVarieties" component={VarietiesFull} />
              <Route exact path="/maizePlanting" component={PlantingFull} />
              <Route exact path="/maizeWaterManagement" component={WaterManagementFull} />
              <Route exact path="/maizeWeedManagement" component={WeedManagementFull} />
              <Route exact path="/maizeCropManagement" component={CropManagementFull} />
              <Route exact path="/maizeSoilFertility" component={SoilFertiltyFull} />
              <Route exact path="/maizeDiseaseManagement" component={SoilFertiltyFull} />
              <Route exact path="/maizeMaturity" component={SoilFertiltyFull} />
              <Route exact path="/maizeHarvesting" component={SoilFertiltyFull} />
              <Route exact path="/maizeStorage" component={SoilFertiltyFull} />
              <Route exact path="/maizePostHarvesting" component={SoilFertiltyFull} />
              <Route exact path="/maizeProcessing" component={SoilFertiltyFull} />








              <Route path="*" component={ErrorPage} />

       </Switch>
</ScrollToTop>
      
     </Router>
    </>
  )

  
}

export default MainLayout;

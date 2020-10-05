import React from 'react'
import {
  
    Link, NavLink
  } from "react-router-dom";
function PotatoeEnglishLinks() {
    return (
        <div id="sideMenu">
        {/* potato value chains */}
        <NavLink exact activeClassName="selected" to="/potatoLanding">Introduction</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoSiteSelection">Site Selection</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoLandPreparation">Land preparation</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoPrePlanting">Pre-planting</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoVarieties">Varieties</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoPlanting">Planting</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoWaterManagement">Water Management</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoWeedManagement">Weed Management</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoSoilFertility">Soil Fertility</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoCropManagement">Crop Management</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoPestManagement">Pest Management</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoDiseaseManagement">Disease Management</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoMaturity">Maturity</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoHarvesting">Harvesting</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoStorage">Storage</NavLink>
         <NavLink exact activeClassName="selected" to="/potatopostHarvest">Post Harvesting</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoProcessing">Processing</NavLink>





    </div>
    )
}

export default PotatoeEnglishLinks

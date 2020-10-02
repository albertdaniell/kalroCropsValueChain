import React from 'react'
import {
  
    Link, NavLink
  } from "react-router-dom";
function EnglishLinks() {
    return (
              
<div id="sideMenu">
<NavLink exact activeClassName="selected" to="/">Introduction</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeSiteSelection">Site Selection</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeLandPreparation">Land preparation</NavLink>
             <NavLink exact activeClassName="selected" to="/maizePrePlanting">Pre-planting</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeVarieties">Varieties</NavLink>
             <NavLink exact activeClassName="selected" to="/maizePlanting">Planting</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeWaterManagement">Water Management</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeWeedManagement">Weed Management</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeSoilFertility">Soil Fertility</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeCropManagement">Crop Management</NavLink>
             <NavLink exact activeClassName="selected" to="/maizePestManagement">Pest Management</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeDiseaseManagement">Disease Management</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeMaturity">Maturity</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeHarvesting">Harvesting</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeStorage">Storage</NavLink>
             <NavLink exact activeClassName="selected" to="/maizepostHarvest">Post Harvesting</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeProcessing">Processing</NavLink>


          
      </div>
    )
}

export default EnglishLinks

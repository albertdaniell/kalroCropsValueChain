import React from 'react'
import {
  
    Link, NavLink
  } from "react-router-dom";
function BeansSideMenu() {
    return (
        <div id="sideMenu">
            {/* beans value chains */}
             <NavLink exact activeClassName="selected" to="/beansSiteSelection">Site Selection</NavLink>
             <NavLink exact activeClassName="selected" to="/beansLandPreparation">Land preparation</NavLink>
             <NavLink exact activeClassName="selected" to="/beansPrePlanting">Pre-planting</NavLink>
             <NavLink exact activeClassName="selected" to="/beansVarieties">Varieties</NavLink>
             <NavLink exact activeClassName="selected" to="/beansPlanting">Planting</NavLink>
             <NavLink exact activeClassName="selected" to="/waterManagement">Water Management</NavLink>
             <NavLink exact activeClassName="selected" to="/weedManagement">Weed Management</NavLink>
             <NavLink exact activeClassName="selected" to="/soilFertiity">Soil Fertility</NavLink>
             <NavLink exact activeClassName="selected" to="/beansCropManagement">Crop Management</NavLink>
             <NavLink exact activeClassName="selected" to="/beansPestsManagement">Pest Management</NavLink>
             <NavLink exact activeClassName="selected" to="/beansDiseaseManagement">Disease Management</NavLink>
             <NavLink exact activeClassName="selected" to="/beansMaturity">Maturity</NavLink>
             <NavLink exact activeClassName="selected" to="/beansHarvesting">Harvesting</NavLink>
             <NavLink exact activeClassName="selected" to="/beansStorage">Storage</NavLink>
             <NavLink exact activeClassName="selected" to="/beanspostHarvest">Post Harvesting</NavLink>
             <NavLink exact activeClassName="selected" to="/beansProcessing">Processing</NavLink>





        </div>
    )
}

export default BeansSideMenu

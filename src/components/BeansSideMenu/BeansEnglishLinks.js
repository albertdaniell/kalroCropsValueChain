import React from 'react'
import {
  
    Link, NavLink
  } from "react-router-dom";
function BeansEnglishLinks() {
    return (
        <div id='sideMenu'>
              <NavLink exact activeClassName="selected" to="/beansLanding">Introduction</NavLink>

<NavLink exact activeClassName="selected" to="/beansSiteSelection">Site Selection</NavLink>
<NavLink exact activeClassName="selected" to="/beansLandPreparation">Land preparation</NavLink>
<NavLink exact activeClassName="selected" to="/beansPrePlanting">Pre-planting</NavLink>
<NavLink exact activeClassName="selected" to="/beansVarieties">Varieties</NavLink>
<NavLink exact activeClassName="selected" to="/beansPlanting">Planting</NavLink>
<NavLink exact activeClassName="selected" to="/beanswaterManagement">Water Management</NavLink>
<NavLink exact activeClassName="selected" to="/beansweedManagement">Weed Management</NavLink>
<NavLink exact activeClassName="selected" to="/beansSoilFertility">Soil Fertility</NavLink>
<NavLink exact activeClassName="selected" to="/beansCropsManagement">Crop Management</NavLink>
<NavLink exact activeClassName="selected" to="/beansPestsManagement">Pest Management</NavLink>
<NavLink exact activeClassName="selected" to="/beansDiseaseManagement">Disease Management</NavLink>
<NavLink exact activeClassName="selected" to="/beansMaturity">Maturity</NavLink>
<NavLink exact activeClassName="selected" to="/beansHarvesting">Harvesting</NavLink>
<NavLink exact activeClassName="selected" to="/beansStorage">Storage</NavLink>


        </div>
    )
}

export default BeansEnglishLinks

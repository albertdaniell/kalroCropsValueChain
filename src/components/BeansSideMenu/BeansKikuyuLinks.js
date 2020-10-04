import React from 'react'
import {
  
    Link, NavLink
  } from "react-router-dom";
function BeansKikuyuLinks() {
    return (
        <div id='sideMenu'>
        <NavLink exact activeClassName="selected" to="/beansLanding">Kiambiriria</NavLink>

<NavLink exact activeClassName="selected" to="/beansSiteSelection">Guthura ha kuhanda</NavLink>
<NavLink exact activeClassName="selected" to="/beansLandPreparation">Kuhariria mugunda  </NavLink>
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

export default BeansKikuyuLinks

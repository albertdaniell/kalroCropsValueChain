import React from 'react'
import {
  
    Link, NavLink
  } from "react-router-dom";
function MaizeSideMenu() {
    return (
        <div id="sideMenu">
             <NavLink exact activeClassName="selected" to="/maizeSiteSelection">Site Selection</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeLandPreparation">Land preparation</NavLink>
             <NavLink exact activeClassName="selected" to="/maizePrePlanting">Pre-planting</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeVarieties">Varieties</NavLink>
             <NavLink exact activeClassName="selected" to="/maizePlanting">Planting</NavLink>
             <NavLink exact activeClassName="selected" to="/waterManagement">Water Management</NavLink>
             <NavLink exact activeClassName="selected" to="/weedManagement">Weed Management</NavLink>
             <NavLink exact activeClassName="selected" to="/soilFertiity">Soil Fertility</NavLink>
             <NavLink exact activeClassName="selected" to="/">Crop Management</NavLink>
             <NavLink exact activeClassName="selected" to="/">Pest Management</NavLink>
             <NavLink exact activeClassName="selected" to="/">Disease Management</NavLink>
             <NavLink exact activeClassName="selected" to="/">Maturity</NavLink>

        </div>
    )
}

export default MaizeSideMenu

import React from 'react'
import {
  
    Link, NavLink
  } from "react-router-dom";
function KikuyuLinks() {
    return (
            
<div id="sideMenu">
          
<NavLink exact activeClassName="selected" to="/">Kiambiriria</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeSiteSelection">Guthura ha kuhanda</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeLandPreparation">Kuhariria mugunda</NavLink>
             <NavLink exact activeClassName="selected" to="/maizePrePlanting">Mbere ya kuhanda </NavLink>
             <NavLink exact activeClassName="selected" to="/maizeVarieties">Mithemba</NavLink>
             <NavLink exact activeClassName="selected" to="/maizePlanting">Kuhanda</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeWaterManagement">Kumenyerera mai </NavLink>
             <NavLink exact activeClassName="selected" to="/maizeWeedManagement">Kurimira</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeSoilFertility">Unoru wa tiiri </NavLink>
             <NavLink exact activeClassName="selected" to="/maizeCropManagement">Umenyereri wa mumea </NavLink>
             <NavLink exact activeClassName="selected" to="/maizePestManagement">Kuhurana na tutambi </NavLink>
             <NavLink exact activeClassName="selected" to="/maizeDiseaseManagement">Kuhurana na mirimu </NavLink>
             <NavLink exact activeClassName="selected" to="/maizeMaturity">Gukura</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeHarvesting">Kugetha</NavLink>
             <NavLink exact activeClassName="selected" to="/maizeStorage">Kiuga/ muigire </NavLink>
             <NavLink exact activeClassName="selected" to="/maizepostHarvest">Thutha wa kugetha  </NavLink>
             <NavLink exact activeClassName="selected" to="/maizeProcessing">Mutatara wa muigire  </NavLink>
      </div>
    )
}

export default KikuyuLinks

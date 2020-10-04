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
<NavLink exact activeClassName="selected" to="/beansPrePlanting">Mbere ya kuhanda </NavLink>
<NavLink exact activeClassName="selected" to="/beansVarieties">Mithemba </NavLink>
<NavLink exact activeClassName="selected" to="/beansPlanting">kuhanda</NavLink>
<NavLink exact activeClassName="selected" to="/beanswaterManagement">Umenyereri wa mai </NavLink>
<NavLink exact activeClassName="selected" to="/beansweedManagement">Kumenyerera ria   </NavLink>
<NavLink exact activeClassName="selected" to="/beansSoilFertility">Unoru wa tiiri   </NavLink>
<NavLink exact activeClassName="selected" to="/beansCropsManagement">Kurora mumera   </NavLink>
<NavLink exact activeClassName="selected" to="/beansPestsManagement">Kuhurana na tutambi  </NavLink>
<NavLink exact activeClassName="selected" to="/beansDiseaseManagement">Kuhurana na mirimu  </NavLink>
<NavLink exact activeClassName="selected" to="/beansMaturity">Gukura  </NavLink>
<NavLink exact activeClassName="selected" to="/beansHarvesting">Kugetha  </NavLink>
<NavLink exact activeClassName="selected" to="/beansStorage">muigire </NavLink>


  </div>
    )
}

export default BeansKikuyuLinks

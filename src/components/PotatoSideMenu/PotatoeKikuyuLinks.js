import React from 'react'
import {
  
    Link, NavLink
  } from "react-router-dom";
function PotatoeKikuyuLinks() {
    return (
        <div id="sideMenu">
        {/* potato value chains */}
        <NavLink exact activeClassName="selected" to="/potatoLanding">Kiambiriria</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoSiteSelection">Gucagura handu ha</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoLandPreparation">Kuhariria mugunda</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoPrePlanting">kwihaririria</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoVarieties">mithemba</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoPlanting">kuhanda</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoWaterManagement">Uhei wa mai</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoWeedManagement">Kurimira riya</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoSoilFertility">Unoru wa tiri</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoCropManagement">Utungati wa mumera</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoPestManagement">Kuhurana na tutambi
</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoDiseaseManagement">Kuhurana na mirimu
</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoMaturity">ugima</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoHarvesting">kugetha</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoStorage">Kuiga na ukui wa waru</NavLink>
         <NavLink exact activeClassName="selected" to="/potatopostHarvest">Thutha wa ugethi</NavLink>
         <NavLink exact activeClassName="selected" to="/potatoProcessing">uthondeki</NavLink>





    </div>
    )
}

export default PotatoeKikuyuLinks

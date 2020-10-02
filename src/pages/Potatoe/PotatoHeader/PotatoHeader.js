import React, { useState } from 'react'
import AppLogo from '../../../layouts/AppLogo/AppLogo'
import AppNav from '../../../layouts/AppNav/AppNav'
import Headerimage from '../../../layouts/HeaderImage/Headerimage'
import Preheader from '../../../layouts/PreHeader/Preheader'
import image1 from '../../../images/potato.jpg'
import OrgLogos from '../../../layouts/OrgLogos/OrgLogos'
function PotatoHeader() {
    const [appName,setAppName]=useState('Potatoes App');
    
    return (
        <div>
            <Preheader></Preheader>
            <OrgLogos></OrgLogos>
            <AppLogo appName={appName} to='/potatoLanding'></AppLogo>
            <AppNav to='/potatoLanding' appName={appName}></AppNav>
            <Headerimage pageHeader="Potatoes" img={image1}></Headerimage>
            
        </div>
    )
}

export default PotatoHeader

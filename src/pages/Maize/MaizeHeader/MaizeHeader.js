import React, { useContext, useState } from 'react'
import AppLogo from '../../../layouts/AppLogo/AppLogo'
import AppNav from '../../../layouts/AppNav/AppNav'
import Headerimage from '../../../layouts/HeaderImage/Headerimage'
import Preheader from '../../../layouts/PreHeader/Preheader'
import image1 from '../../../images/maize2.jpg'
import OrgLogos from '../../../layouts/OrgLogos/OrgLogos'
import { AppContext } from '../../../contexts/AppContext/AppContext'
function MaizeHeader() {
    const { appLanguage,isloading } = useContext(AppContext);

    const [appName,setAppName]=useState(appLanguage==='1'?'Maize App': 'Mbembe App')
    const [appHeader,setappHeader]=useState(appLanguage==='1'?'Maize': 'Mbembe')
    
    return (
        <div>
            <Preheader></Preheader>
            <OrgLogos></OrgLogos>
            <AppLogo appName={appName} to='/'></AppLogo>
            <AppNav to='/' appName={appName}></AppNav>
            <Headerimage pageHeader={appHeader} img={image1}></Headerimage>
            
        </div>
    )
}

export default MaizeHeader

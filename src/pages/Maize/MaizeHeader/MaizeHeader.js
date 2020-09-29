import React, { useState } from 'react'
import AppLogo from '../../../layouts/AppLogo/AppLogo'
import AppNav from '../../../layouts/AppNav/AppNav'
import Headerimage from '../../../layouts/HeaderImage/Headerimage'
import Preheader from '../../../layouts/PreHeader/Preheader'
import image1 from '../../../images/maize2.jpg'
function MaizeHeader() {
    const [appName,setAppName]=useState('Maize App');
    
    return (
        <div>
            <Preheader></Preheader>
            <AppLogo appName={appName}></AppLogo>
            <AppNav appName={appName}></AppNav>
            <Headerimage pageHeader="Maize" img={image1}></Headerimage>
            
        </div>
    )
}

export default MaizeHeader

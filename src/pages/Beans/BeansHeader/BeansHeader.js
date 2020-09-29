import React, { useState } from 'react'
import AppLogo from '../../../layouts/AppLogo/AppLogo'
import AppNav from '../../../layouts/AppNav/AppNav'
import Headerimage from '../../../layouts/HeaderImage/Headerimage'
import Preheader from '../../../layouts/PreHeader/Preheader'
import image1 from '../../../images/beans.jpg'
function BeansHeader() {
    const [appName,setAppName]=useState('Beans App');
    
    return (
        <div>
            <Preheader></Preheader>
            <AppLogo appName={appName}></AppLogo>
            <AppNav appName={appName}></AppNav>
            <Headerimage pageHeader="Beans" img={image1}></Headerimage>
            
        </div>
    )
}

export default BeansHeader

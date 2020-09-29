import React, { useState } from 'react'
import AppLogo from '../AppLogo/AppLogo'
import AppNav from '../AppNav/AppNav'
import Headerimage from '../HeaderImage/Headerimage';
import Preheader from '../PreHeader/Preheader'

function ErrorPage() {
    const [appName,setAppName]=useState('Go to Home');
    return (
        <div>
             <Preheader></Preheader>
            <AppLogo appName={appName} to='/'></AppLogo>
            <AppNav appName={appName}></AppNav>
            <Headerimage pageHeader="404 Error! Page Not Found"></Headerimage>
            
        </div>
    )
}

export default ErrorPage

import React, { useContext } from "react";

import { AppContext } from "../../contexts/AppContext/AppContext";
import AppNavEnglishLinks from "./AppNavEnglishLinks";
import AppNavKikuyuLinks from "./AppNavKikuyuLinks";

function AppNav(props) {
  const { appLanguage,isloading } = useContext(AppContext);
  const {appName,to}=props

if(appLanguage === '1'){
  return (
    <div>
    <AppNavEnglishLinks appName={appName} to={to}></AppNavEnglishLinks>  
    </div>
  );
}

else{
  return (
    <div>
    <AppNavKikuyuLinks appName={appName} to={to}></AppNavKikuyuLinks>  
    </div>
  );
}
}

export default AppNav;

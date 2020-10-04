import React, { useContext } from 'react'

import { AppContext } from '../../contexts/AppContext/AppContext';
import BeansEnglishLinks from './BeansEnglishLinks';
import BeansKikuyuLinks from './BeansKikuyuLinks';

function BeansSideMenu() {
    const {appLanguage}=useContext(AppContext)
    if(appLanguage === '1'){
     return (
         <>
         <div style={{paddingLeft:5}}>
        
         </div>
   <BeansEnglishLinks></BeansEnglishLinks>
         </>
     )
    }
 
    else{
     return (
         <>
         <div style={{paddingLeft:5}}>
       
         </div>
   <BeansKikuyuLinks></BeansKikuyuLinks>
         </>
     )
    }


    
}

export default BeansSideMenu

import React, { useContext } from 'react'

import { AppContext } from '../../contexts/AppContext/AppContext';
import EnglishLinks from './EnglishLinks';
import KikuyuLinks from './KikuyuLinks';
function MaizeSideMenu() {

    const {appLanguage}=useContext(AppContext)
    if(appLanguage === '1'){
     return (
         <>
         <div style={{paddingLeft:5}}>
        
         </div>
   <EnglishLinks></EnglishLinks>
         </>
     )
    }
 
    else{
     return (
         <>
         <div style={{paddingLeft:5}}>
         <h5>Side Menu</h5> <hr ></hr>
         </div>
   <KikuyuLinks></KikuyuLinks>
         </>
     )
    }


    
 
}

export default MaizeSideMenu

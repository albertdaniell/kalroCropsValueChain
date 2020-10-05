import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext/AppContext'
import PotatoeEnglishLinks from './PotatoeEnglishLinks'
import PotatoeKikuyuLinks from './PotatoeKikuyuLinks'

function PotatoSideMenu() {
   
    const {appLanguage}=useContext(AppContext)
    if(appLanguage === '1'){
     return (
         <>
         <div style={{paddingLeft:5}}>
        
         </div>
   <PotatoeEnglishLinks></PotatoeEnglishLinks>
         </>
     )
    }
 
    else{
     return (
         <>
         <div style={{paddingLeft:5}}>
       
         </div>
   <PotatoeKikuyuLinks></PotatoeKikuyuLinks>
         </>
     )
    }

}

export default PotatoSideMenu

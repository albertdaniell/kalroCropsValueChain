import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function SoilFertilityPrev() {
    return (
        <div>
           <AppCard>
               <AppCardHeader>
               Soil Fertility
               </AppCardHeader>
               <AppCardBody to='/maizeSoilFertility'>
               Apply only deficient nutrients and conservation farming approaches

               </AppCardBody>
               </AppCard> 
        </div>
    )
}

export default SoilFertilityPrev

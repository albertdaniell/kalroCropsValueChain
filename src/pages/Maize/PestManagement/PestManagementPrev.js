import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PestManagementPrev() {
    return (
        <div>
           <AppCard>
               <AppCardHeader>
               Pest Management
               </AppCardHeader>
               <AppCardBody to='/maizePestManagement'>
               Pests include, Fall Armyworm, Armyworm, Maize stalk borer, Termites, Cutworms, Leaf miner, Moths, Beetles, Thrips, Grasshopper, Rodents, Weevils and Larger grain borer
               </AppCardBody>
               </AppCard> 
        </div>
    )
}

export default PestManagementPrev

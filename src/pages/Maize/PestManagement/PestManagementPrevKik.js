import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PestManagementPrevKik() {
    return (
        <div>
           <AppCard>
               <AppCardHeader>
               Kuhurana na tutambi 
               </AppCardHeader>
               <AppCardBody to='/maizePestManagement'>
               Tutambi na inguyo mithemba miingi ta: mbucha, muthua, ndaahi na ingi nyingi
                </AppCardBody>
               </AppCard> 
        </div>
    )
}

export default PestManagementPrevKik

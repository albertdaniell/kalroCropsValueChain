import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function CropsManagementPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Crop Management
                </AppCardHeader>
                <AppCardBody to='/maizeCropManagement'>
                Top dress at knee height, irrigate if necessary, control weeds timely and intercrop with fodder such as Desmodium uncinatum


                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default CropsManagementPrev

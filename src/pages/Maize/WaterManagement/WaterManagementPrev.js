import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function WaterManagementPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Water Management
                </AppCardHeader>
                <AppCardBody to='/maizeWaterManagement'>
                Establish on-farm water harvesting capability and water storage capacity, ditches, mulch and higher organic matter content
                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default WaterManagementPrev

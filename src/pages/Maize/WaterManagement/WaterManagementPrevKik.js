import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function WaterManagementPrevKik() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Kumenyerera mai
                </AppCardHeader>
                <AppCardBody to='/maizeWaterManagement'>
                Geria gutega mai nakuiga mai ma tiiri, kuiga mulching na gwikira thumu kugiriria mai kuura                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default WaterManagementPrevKik

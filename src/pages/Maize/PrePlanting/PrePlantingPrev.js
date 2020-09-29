import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PrePlantingPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>Pre-Planting</AppCardHeader>
                <AppCardBody to='/maizePreplanting'>
                    <h6>Planting Materials</h6>
                    Common planting materials include certified seeds and farmer saved seeds 
                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PrePlantingPrev

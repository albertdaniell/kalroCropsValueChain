import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PlantingPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Planting
                </AppCardHeader>
                <AppCardBody to='/maizePlanting'>
                Plant at the onset of rains at a spacing of 75cm x 25 or 30cm, 1 seed per hole 5 cm deep
                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PlantingPrev

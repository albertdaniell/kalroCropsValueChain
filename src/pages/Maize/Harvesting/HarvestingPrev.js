import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function HarvestingPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Harvesting
                </AppCardHeader>
                <AppCardBody to='/maizeHarvesting'>
                Harvesting by cutting and stalking to enhance drying and prevent pathogen infestation

                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default HarvestingPrev

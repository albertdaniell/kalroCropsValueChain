import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function BeansHarvestingPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Harvesting
                </AppCardHeader>
                <AppCardBody to='/beansHarvesting'>
                Bean will produce up to 1.0–2.8 tons per ha

                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default BeansHarvestingPrev

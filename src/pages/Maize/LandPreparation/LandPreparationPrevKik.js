import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function LandPreparationKikPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>Land Preparation</AppCardHeader>
                <AppCardBody to='/maizeLandPreparation'>
                Add manure and fertilizer with recommendations from soil testing and analysis
                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default LandPreparationKikPrev

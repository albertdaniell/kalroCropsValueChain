import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function ProcessingPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Processing
                </AppCardHeader>
                <AppCardBody to='/maizeProcessing'>
                Control weevils, fungal infections (aflatoxin) and grain borers by drying the maize to 13-14% moisture

                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default ProcessingPrev

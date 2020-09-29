import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PotatoePrePlantingPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Pre-Planting
                </AppCardHeader>
                <AppCardBody to='/potatoPreplanting'>
                    <h6>Planting materials</h6>
                    Ensure to plant certified seeds
                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PotatoePrePlantingPrev

import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PotatoeMaturityPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Maturity 
                </AppCardHeader>
                <AppCardBody to='/potatoMaturity'>
                Potatoes mature 90-120 days after planting depending on variety

                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PotatoeMaturityPrev

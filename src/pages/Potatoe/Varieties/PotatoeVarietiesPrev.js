import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PotatoeVarietiesPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Varieties
                </AppCardHeader>
                <AppCardBody to='/potatoVariety'>
                Choice of variety depends on the locality, consumer and market preference. Disease and pest resistance may also dictate the varieties to be grown
                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PotatoeVarietiesPrev

import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PotatoeHarvestingPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Harvesting 
                </AppCardHeader>
                <AppCardBody to='/potatoHarvesting'>
                Cut foliage close to soil base if vines have not dried after attaining maturity for the purpose of hardening the tubers 

                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PotatoeHarvestingPrev

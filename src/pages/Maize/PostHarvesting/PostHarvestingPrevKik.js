import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PostHarvestingPrevKik() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Thutha wa kugetha   
                </AppCardHeader>
                <AppCardBody to='/maizePostHarvest'>
                Kua mbembe kuma mugunda kinya ha guthaduririra ugitumire indo theru.
                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PostHarvestingPrevKik

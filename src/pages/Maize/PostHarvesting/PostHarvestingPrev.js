import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PostHarvestingPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Post-harvest handling 
                </AppCardHeader>
                <AppCardBody to='/maizePostHarvest'>
                    lace of shelling using clean transport equipment dry before shelling winnow to remove dust 
                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PostHarvestingPrev

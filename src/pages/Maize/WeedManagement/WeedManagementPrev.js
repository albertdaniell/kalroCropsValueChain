import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function WeedManagementPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Weed Management
                </AppCardHeader>
                <AppCardBody to='/maizeWeedManagement'>
                1st weeding is done 3-4 weeks after germination and 2nd weeding done just before topdressing

                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default WeedManagementPrev

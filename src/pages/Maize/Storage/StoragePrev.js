import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function StoragePrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                    Storage
                </AppCardHeader>
                <AppCardBody to='/maizeStorage'>
                Store in airtight bags or metallic silos and minimize use of pesticides
                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default StoragePrev

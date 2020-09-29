import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PotatoeWaterManagementPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Water Management
                </AppCardHeader>
                <AppCardBody to='/potatowaterManagement'>
                Ensure water is applied immediately after planting, at flowering, at tuber formation and at expansion 

                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PotatoeWaterManagementPrev

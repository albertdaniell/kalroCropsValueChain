import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PotatoePestManagementPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Pest management
                </AppCardHeader>
                <AppCardBody to='/potatoPestManagement'>
                Potato pests include; aphids, white flies, tuber moth, nematodes Potato Cyst Nematodes (PCN) and root knot nematodes, cutworms, and leaf minor and thrips

                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PotatoePestManagementPrev

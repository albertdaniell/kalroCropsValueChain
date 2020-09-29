import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PotatoeSiteSelectionPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Site selection
                </AppCardHeader>
                <AppCardBody>
                Select a suitable site where same crop family has not been grown for at least 4 years 
                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PotatoeSiteSelectionPrev;

import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function MaturityPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Maturity
                </AppCardHeader>
                <AppCardBody to='/maizeMaturity'>
                Maize is mature 4 to 9 months after planting depending on the variety and altitude. 

                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default MaturityPrev

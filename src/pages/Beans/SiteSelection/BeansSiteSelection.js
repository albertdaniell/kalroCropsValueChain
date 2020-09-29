import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function BeansSiteSelection() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Site Selection
                </AppCardHeader>
                <AppCardBody to='/beansSiteSelection'>
                Select a site away from shade to allow for sufficient sunshine and should be at least 10 meters away from the road to prevent dust and vehicle fumes

                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default BeansSiteSelection

import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function BeansWeedManagement() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Weed Management
                </AppCardHeader>
                <AppCardBody to='/beansweedManagement'>
                Control weeds timely
                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default BeansWeedManagement

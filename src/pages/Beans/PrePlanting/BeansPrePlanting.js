import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function BeansPrePlanting() {
    return (
        <div>
            <AppCard>
              <AppCardHeader>
              Pre Planting
              </AppCardHeader>
                <AppCardBody to='/beansPrePlanting'>
                <h6>Planting materials </h6>
Certified seed 
Farmer saved seeds 
                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default BeansPrePlanting

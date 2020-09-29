import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PotatoeStoragePrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Storage and transportation
                </AppCardHeader>
                <AppCardBody to='/potatoStorage'>
                Storage is done in cool dry place away from sunlight
                </AppCardBody>
            </AppCard>
            
        </div>
    )
}

export default PotatoeStoragePrev

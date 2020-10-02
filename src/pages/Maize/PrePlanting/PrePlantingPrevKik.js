import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PrePlantingPrevKik() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>Mbere ya kuhanda</AppCardHeader>
                <AppCardBody to='/maizePreplanting'>
                    <h6> Mbegu cia kuhanda </h6>
                    mbegua cia kuhanda ni iria hitukie ni ataramu
                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PrePlantingPrevKik

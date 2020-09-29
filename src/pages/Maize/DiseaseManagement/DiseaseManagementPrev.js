import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function DiseaseManagementPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Disease Management
                </AppCardHeader>
                <AppCardBody to='/maizeDiseaseManagement'>
                Diseases include; Head smut, Smut, Maize lethal necrosis disease (MLND), Maize streak virus, Northern leaf blight, Common rust, Grey leaf spot


                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default DiseaseManagementPrev

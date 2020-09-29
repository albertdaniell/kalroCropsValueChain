import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PotatoeDiseaseManagementPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Disease management
                </AppCardHeader>
                <AppCardBody to='/potatoDiseaseManagement'>
                Bacterial diseases; late and early  blight, bacterial wilt, verticillium wilt, soft rot and black scurf 
Viral diseases; potato leaf roll and yellow virus, common scab, powdery scab and wart

                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PotatoeDiseaseManagementPrev

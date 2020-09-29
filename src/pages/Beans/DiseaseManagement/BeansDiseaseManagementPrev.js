import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function BeansDiseaseManagementPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Disease Management
                </AppCardHeader>
                <AppCardBody to='/beansDiseaseManagement'>
                Diseases include; Root rots Leaf spots, Alternaria, Anthracnose, Bean rust Bacterial blight Common Xanthomonas phaseoli, Ashy stem, Bean common mosaic necrosis virus (BCMV), Bean scab and White mould

                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default BeansDiseaseManagementPrev

import React from 'react'
import AppCard from '../../../layouts/AppCard/AppCard'
import AppCardBody from '../../../layouts/AppCardBody/AppCardBody'
import AppCardHeader from '../../../layouts/AppCardHeader/AppCardHeader'

function PotatoeSoilFertilityPrev() {
    return (
        <div>
            <AppCard>
                <AppCardHeader>
                Soil fertility
                </AppCardHeader>
                <AppCardBody to='/potatosoilFertility'>
                Apply required nutrients based on results of soil test/ analysis and on plant nutrient requirements

                </AppCardBody>
            </AppCard>
        </div>
    )
}

export default PotatoeSoilFertilityPrev

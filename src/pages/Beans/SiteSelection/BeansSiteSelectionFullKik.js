import React from "react";
import BeansSideMenu from "../../../components/BeansSideMenu/BeansSideMenu";

import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import BeansHeader from "../BeansHeader/BeansHeader";
import BeansLandPreparation from "../LandPreparation/BeansLandPreparation";
import BeansLandPreparationKik from "../LandPreparation/BeansLandPreparationKik";



function BeansSiteSelectionFullKik() {
  return (
    <div>
      <BeansHeader></BeansHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>                Guthura ha kuhanda</h5>
            <hr></hr>
            Thura handu hatari kiruru na hena riua riiganu na githimi kia mita (10metres) kuuma barabara ni undu wa kugiririria rukungu rwa ngaari na ndoogo 

            <h6>Altitude range</h6>
            Mboco yendaga gukurio matura maria mari na  githimikia riera kia 1000 – 2000 masl,
            <h6>Muthemba wa tiiri</h6>
            Tiiri utari mai maingi na wina ururu wa  l pH: 6.0 – 7.0.
                        <h6>Urugari</h6>
                        Urugari ni kuuma  20 – 30 oC            <h6>Mbura</h6>
                        Mbura ya muigana wa 750 – 4000 mm p.a.          </p>

          <p>
            <h6>Next</h6>
            <BeansLandPreparationKik></BeansLandPreparationKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <BeansSideMenu></BeansSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default BeansSiteSelectionFullKik;

import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import LandPreparationPrev from "../LandPreparation/LandPreparationPrev";
import LandPreparationKikPrev from "../LandPreparation/LandPreparationPrevKik";
import MaizeHeader from "../MaizeHeader/MaizeHeader";

function SiteSelectionFull() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Guthura ha kuhanda</h5>
            <hr></hr>
            Thura handu hatari kiruru na hena riua riiganu na githimi kia makinya ikumi (10metres) kuumaharibarabaraniunduwakugiririarukungurwagaarinandogo
            <h6>Altitude range</h6>
            Mbembe yendaga githima kia riera muigana wa 0-2200 masl Irima ini; muigananiro; mikuru kuringana na muthemba.   
            <h6>Muthemba wa tiiri</h6>
            Tiiri muriku, utari mai maingi, tiiri wa red munoru, uhota kuiga mai na wina unoru wa kimerera kana nutrients           <br></br>
            pH/ururu wa tiri 5.5-7.5. mbembe yendaga fertilizer ici; N, P, K, Mg, Ca, S, Fe, Zn, Mn, B, Cu, Mo, Cl.  
            <h6>urugari</h6>
            urugari wagiriirwo gukorwo 25-30 oC           <h6>Mbura</h6>
            Muiganawamburani 400 – 1200 mm p.a
          </p>

          <p>
            <h6>Next</h6>
            <LandPreparationKikPrev/>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default SiteSelectionFull;

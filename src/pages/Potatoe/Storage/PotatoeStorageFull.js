import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PostHarvestingPrev from "../../Maize/PostHarvesting/PostHarvestingPrev";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoeStorageFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Storage and transportation </h5>
                        <hr></hr>
                        Storage is done in cool dry place away from sunlight


                        <ul>
                            <li>
                            Packed potato intended for market are transported using bicycle, pick-up, lorries, depending on destination                            </li>
                            <li>The produce should be transported during the coolest part of the day</li>
                                  </ul>
                            <PostHarvestingPrev></PostHarvestingPrev>
          </p>
                </AppLeftSideContainer>
                <AppRightSideContainer>
                   <PotatoSideMenu></PotatoSideMenu>
                </AppRightSideContainer>
            </AppContainer>
        </div>
    );
}

export default PotatoeStorageFull
import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoeHarvestingFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Harvesting </h5>
                        <hr></hr>
                        Cut foliage close to soil base if vines have not dried after attaining maturity for the purpose of hardening the tubers 



                        <ul>
                            <li>
                            Harvest 7-14 days after dehaulming by digging up the tubers carefully using a forked jembe to avoid damaging them
                            </li>
                            <li>They are then dried for a short period of time in rows before gathering them</li>
                            <li>Potato will produce up to 40tons per ha  or 16tons per acre with proper management</li>
                                  </ul>
                            
          </p>
                </AppLeftSideContainer>
                <AppRightSideContainer>
                   <PotatoSideMenu></PotatoSideMenu>
                </AppRightSideContainer>
            </AppContainer>
        </div>
    );
}

export default PotatoeHarvestingFull

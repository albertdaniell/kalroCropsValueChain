import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";
import PotatoeWeedManagementPrev from "../WeedManagement/PotatoeWeedManagementPrev";

function PotatoeWaterManagementFullKik() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Uhei wa mai</h5>
                        <hr></hr>
                        Tigirira ni wahe mai
wahanda mbegu , ikiruta
mahua, na igikura ituike waru
na igitunguha waru
                     
                        <ul>
                            <li>Mai maigananiirie ni marabatarania hingo ciothe</li>
                            <li>waru urakura</li>
                            <li>He mai hindi iria kwina riua muno.
Tiga kuheaga mai rimwe na rimwe tondu waru
no ikugaca
</li>
                                  </ul>
                         <PotatoeWeedManagementPrev></PotatoeWeedManagementPrev>   
          </p>
                </AppLeftSideContainer>
                <AppRightSideContainer>
                   <PotatoSideMenu></PotatoSideMenu>
                </AppRightSideContainer>
            </AppContainer>
        </div>
    );
}

export default PotatoeWaterManagementFullKik

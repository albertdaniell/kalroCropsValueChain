import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoePostHarvestingFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Post-harvest handling </h5>
                        <hr></hr>
                        Protect harvested potatoes from sunshine to avoid shrinkage, shrivelling and discolouration.
Clean, sort and grade the harvested potatoes depending on the use



                        <ul>
                            <li>Clean soil from the potatoes without bruising the skin</li>
                            <li>Overstacking should be avoided during transpotation</li>
                            <li>Sorting is done to remove rotten, damaged, malformed and weevil infested potatoes, and debris</li>
                            <li>Grading is based on size, shape, colour, weight, maturity, market demand</li>
                            <li>Potato is packaged in baskets, sacks, crates, depending on distance of transportation Potatoes in gunny bags/sacks be packaged in 50kg and below</li>
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

export default PotatoePostHarvestingFull
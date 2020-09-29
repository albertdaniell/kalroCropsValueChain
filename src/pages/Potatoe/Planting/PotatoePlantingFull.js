import React from "react";
import PotatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import potatoSideMenu from "../../../components/PotatoSideMenu/PotatoSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";
import PotatoHeader from "../PotatoHeader/PotatoHeader";

function PotatoePlantingFull() {
    return (
        <div>
            <PotatoHeader></PotatoHeader>
            <AppContainer>
                <AppLeftSideContainer>
                    <p>
                        <h5>Planting</h5>
                        <hr></hr>
                        Plant early at onset of rainy season, in furrows using well-sprouted clean certified seed with 4-5 sprouts 
                        <h6>Planting procedure</h6>
                        <ul>
                  <li>
                  Plant at 5-15 cm depth but deeper and 30-40cm for white varieties under warm dry conditions</li>           
                  <li>Place tubers with sprouts facing up</li>
                  <li>For consumption purposes, plant at a spacing of 75cm x 30 cm between rows and 30-40 cm within rows</li>
                  <li>Seed rate for tubers is 2-2.5 tons per ha. Seed rate depends on soil fertility status, rainfall availability and tuber use </li>
                  <li>
                  The larger the seed size, the more the amount required
                  </li>
                  <li>Make wider ridges or mounds if intercropping with annual crops e.g. maize and legumes</li>
                  <li>For seed potatoes, plant at a spacing of 15-20cm within rows, at 50kg bags per acre</li>
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

export default PotatoePlantingFull

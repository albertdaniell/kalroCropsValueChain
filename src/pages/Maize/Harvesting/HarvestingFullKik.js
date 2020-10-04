import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";


import MaizeHeader from "../MaizeHeader/MaizeHeader";

import StoragePrev from "../Storage/StoragePrev";
import StoragePrevKik from "../Storage/StoragePrevKik";


function HarvestingFullKik() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kugetha</h5>
            <hr></hr>
         
            Getha mbebe na gutema wohe maja nigetha mbembe ciume niundu kugiriria kuguma 

            <ul>
                <li>Getha mumera wakura thutha thiku 10 ngiya 15 thutha wa kuona mbembe ni guru</li>
                <li>Getha mbebe na gutema wohe maja nigetha mbembe ciume niundu kugiriria kuguma</li>
                <li>Getha na gukonyora.</li>
            
      
            </ul>
          </p>

          <p>
            <h6>Next</h6>
     <StoragePrevKik></StoragePrevKik>
          </p>
        </AppLeftSideContainer>
        <AppRightSideContainer>
          <MaizeSideMenu></MaizeSideMenu>
        </AppRightSideContainer>
      </AppContainer>
    </div>
  );
}

export default HarvestingFullKik;

import React from "react";
import MaizeSideMenu from "../../../components/MaizeSideMenu/MaizeSideMenu";
import AppContainer from "../../../layouts/AppContainer/AppContainer";
import AppLeftSideContainer from "../../../layouts/AppLeftSideContainer/AppLeftSideContainer";
import AppRightSideContainer from "../../../layouts/AppRightSideContainer/AppRightSideContainer";

import MaizeHeader from "../MaizeHeader/MaizeHeader";

import StoragePrev from "../Storage/StoragePrev";
import StoragePrevKik from "./StoragePrevKik";


function StorageFullKik() {
  return (
    <div>
      <MaizeHeader></MaizeHeader>
      <AppContainer>
        <AppLeftSideContainer>
          <p>
            <h5>Kiuga/ muigire </h5>
            <hr></hr>
         
            Inga bembe ciaku na ikunia ritairingiria riera(airtight bags) kana ikumbu ria mabati(metallic silos) na uhinyihie kuhithira dawa cia tutambi

            <ul>
                <li>Kua mbembe kuma mugunda kinya ha guthaduririra ugitumire indo theru.</li>
                <li>Anika mbebe ciume mbere ya guthandura</li>
                <li>Huha niguo urute rukungu na mahuti.</li>
                <li>
                Ni undu wa kumenyerera tutambi umithia mbemba na uigu wa kuuma (13 -14% moisture content) niundu wa kugiriria gwatuka gwa mbembe na kubutha itigakorwo na thumu wa aflotoxin
                </li>
            
      
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

export default StorageFullKik;

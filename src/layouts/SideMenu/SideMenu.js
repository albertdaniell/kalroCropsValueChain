import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,NavLink 
  } from "react-router-dom";
function SideMenu() {
    return (
        <>
        <div style={{paddingLeft:5}}>
        <h5>Side Menu</h5> <hr ></hr>
        </div>
         
<div id="sideMenu">
          
            <NavLink exact activeClassName="selected" to="/">Introduction</NavLink>
            <div id="childLinks">
                <NavLink activeClassName="selected" to="/problems">Problems facing poultry production</NavLink>
                <NavLink activeClassName="selected" to="/recommendation">Recommendations for increasing poultry production and productivity</NavLink>
            </div>
            <NavLink  to="#">Poultry Breeds</NavLink>
            <div id="childLinks">
            <NavLink activeClassName="selected"   to="/poultryBreeds">
                Poultry Breeds / Types
                </NavLink>
                <NavLink activeClassName="selected"   to="/otherimproved">
                Other imporoved Indigenous ...
                </NavLink>
            </div>
            
            <NavLink to="#">Poultry Housing & Equipment</NavLink>
            <div id="childLinks">
            < Link   to="/poultryHousing">
                Poultry Housing and equipment
                </ Link>
                < Link   to="/poultryHouse">
                Poultry house for 100 layers ...
                </ Link>

                < Link   to="raisedPoultry"> Raised poultry house for 100 layers ...</ Link>
                < Link   to="feedingWatering"> Feeding and watering  ...</ Link>
            </div>
            < Link  class="nav-link" to="/poultryManagementSys">
              Poultry Management Systems
              </ Link>
             
            <NavLink  to="#">Poultry Management</NavLink>
            <div id="childLinks">
            < Link   to="/brooding">
                Brooding
                </ Link>
                < Link   to="/broodingProcess">
                Brooding Process
                </ Link>

                < Link   to="broodingManagement"> Brooding Management</ Link>
            </div>
           
            <NavLink  to="#"> Poultry Nutrition</NavLink>
            <div id="childLinks">
            < Link   to="/poultryNutrition">
            Poultry Nutrition, Feeds & Feeding
                </ Link>
                < Link   to="/commonSources">
                Common Sources of nutrition
                </ Link>
            </div>
            <NavLink to="#"> Poultry Feeds & Feeding</NavLink>
            <div id="childLinks">
            < Link   to="/feedingBroilers">
           Feeding Broilers
                </ Link>
                < Link   to="/feedingCommercial">
               Feeding Commercials
                </ Link>
                < Link   to="/waterRequirements">
               Water Requirements
                </ Link>
            </div>

            < Link  class="nav-link" to="/poultryManagementSys">
              Poultry Health Management 
              </ Link>
              <div id="childLinks">
            < Link   to="/poultryHealth">
                Poultry Health
                </ Link>
                < Link   to="/commonDiseases">
                Common Diseases
                </ Link>
                < Link   to="/diseasePrevention">
                Diseases Prevention
                </ Link>
                < Link   to="/vaccination">
              Vaccination
                </ Link>

                < Link   to="/vaccinationProgram">
                Vaccination Program
                </ Link>
                < Link   to="/vices">
                Vices
                </ Link>
                < Link   to="/otherCausesLoss">
                Other causes of loss in poultry production
                </ Link>


            </div>
            <NavLink activeClassName="selected" to="/diseasePrevention">Disease Prevention Measure</NavLink>
            <NavLink activeClassName="selected" to="/poultryBiosecurity">Poultry Bio-Security</NavLink>
            
            <NavLink activeClassName="selected" to="/localPoultryImprovement">Local Poultry Improvement</NavLink>
            <NavLink activeClassName="selected" to="/feedFormulation">Feed Formulation</NavLink>
            <NavLink  to="#">Key Actors in the poultry value chains</NavLink>
            
        </div>
        </>
    )
}

export default SideMenu



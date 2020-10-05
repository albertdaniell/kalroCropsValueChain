import React from "react";
import AppCard from "../../../layouts/AppCard/AppCard";
import AppCardBody from "../../../layouts/AppCardBody/AppCardBody";
import AppCardHeader from "../../../layouts/AppCardHeader/AppCardHeader";

function PotatoePostHarvestingPrevKik() {
  return (
    <div>
      <AppCard>
        <AppCardHeader>Thutha wa ugethi</AppCardHeader>
        <AppCardBody to="/potatopostHarvest">
          Gitira waru kuma na riua rihiu niguo kugiririria waru kuhoha na
          gucejia rangi. theria,
          <br></br>
          thuuarania na utigithukanie mutungu na muceke thutha kugetha.
        </AppCardBody>
      </AppCard>
    </div>
  );
}

export default PotatoePostHarvestingPrevKik;

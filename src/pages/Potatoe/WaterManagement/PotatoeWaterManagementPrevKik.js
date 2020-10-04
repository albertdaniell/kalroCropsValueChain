import React from "react";
import AppCard from "../../../layouts/AppCard/AppCard";
import AppCardBody from "../../../layouts/AppCardBody/AppCardBody";
import AppCardHeader from "../../../layouts/AppCardHeader/AppCardHeader";

function PotatoeWaterManagementPrevKik() {
  return (
    <div>
      <AppCard>
        <AppCardHeader>Uhei wa mai</AppCardHeader>
        <AppCardBody to="/potatowaterManagement">
          Tigirira ni wahe mai wahanda mbegu , ikiruta mahua, na igikura ituike
          waru na igitunguha waru
        </AppCardBody>
      </AppCard>
    </div>
  );
}

export default PotatoeWaterManagementPrevKik;

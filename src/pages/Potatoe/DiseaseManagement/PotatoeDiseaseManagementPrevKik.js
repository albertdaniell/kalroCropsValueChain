import React from "react";
import AppCard from "../../../layouts/AppCard/AppCard";
import AppCardBody from "../../../layouts/AppCardBody/AppCardBody";
import AppCardHeader from "../../../layouts/AppCardHeader/AppCardHeader";

function PotatoeDiseaseManagementPrevKik() {
  return (
    <div>
      <AppCard>
        <AppCardHeader>Kuhurana na mirimu</AppCardHeader>
        <AppCardBody to="/potatoDiseaseManagement">
          Mirimu ya bacteria; mbaa, waru kuhia gukua, Waru kuhoha, waru kurota
          na kugia mathundo; mathangu gukujana na kwirua,
        </AppCardBody>
      </AppCard>
    </div>
  );
}

export default PotatoeDiseaseManagementPrevKik;

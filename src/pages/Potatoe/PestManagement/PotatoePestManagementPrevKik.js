import React from "react";
import AppCard from "../../../layouts/AppCard/AppCard";
import AppCardBody from "../../../layouts/AppCardBody/AppCardBody";
import AppCardHeader from "../../../layouts/AppCardHeader/AppCardHeader";

function PotatoePestManagementPrevKik() {
  return (
    <div>
      <AppCard>
        <AppCardHeader>Kuhurana na tutambi</AppCardHeader>
        <AppCardBody to="/potatoPestManagement">
          Tutambi twa waru ni; gathua, twihuruta, tuber moth, nematodes Potato
          Cyst Nematodes (PCN) and root knot nematodes, cutworms, and leaf minor
          and ume
        </AppCardBody>
      </AppCard>
    </div>
  );
}

export default PotatoePestManagementPrevKik;

import React from "react";
import AppCard from "../../../layouts/AppCard/AppCard";
import AppCardBody from "../../../layouts/AppCardBody/AppCardBody";
import AppCardHeader from "../../../layouts/AppCardHeader/AppCardHeader";

function PotatoeStoragePrevKik() {
  return (
    <div>
      <AppCard>
        <AppCardHeader>Kuiga na ukui wa waru</AppCardHeader>
        <AppCardBody to="/potatoStorage">
          Waru ni uigwo kundu gutari heho kana urugari muingi na kuraihu na riua
        </AppCardBody>
      </AppCard>
    </div>
  );
}

export default PotatoeStoragePrevKik;

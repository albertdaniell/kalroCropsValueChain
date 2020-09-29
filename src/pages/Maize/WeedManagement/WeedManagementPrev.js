import React from "react";
import AppCard from "../../../layouts/AppCard/AppCard";
import AppCardBody from "../../../layouts/AppCardBody/AppCardBody";
import AppCardHeader from "../../../layouts/AppCardHeader/AppCardHeader";

function WeedManagementPrev() {
  return (
    <div>
      <AppCard>
        <AppCardHeader>Weed Management</AppCardHeader>
        <AppCardBody to="/maizeWeedManagement">
          1st weeding is done 3-4 weeks after germination and 2nd weeding done
          just before topdressing
          <ul>
            <li>
              Maize; 1st topdressing is applied when the maize crop is knee high
              at 30-45 cm high
            </li>
            <li>
              2nd topdressing is applied when maize crop is almost tussling and
              usually when there is enough moisture in the soil
            </li>
          </ul>
        </AppCardBody>
      </AppCard>
    </div>
  );
}

export default WeedManagementPrev;

import React from "react";

function AppLeftSideContainer(props) {
  return (
    <div class="col-sm-8 animate__animated animate__fadeIn">
      {props.children}
    </div>
  );
}

export default AppLeftSideContainer;

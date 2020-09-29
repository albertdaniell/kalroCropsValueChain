import React from "react";

function AppRightSideContainer(props) {
  return <div class="col-sm-4"> <h5>Side Menu</h5> <hr></hr> {props.children}</div>;
}

export default AppRightSideContainer;

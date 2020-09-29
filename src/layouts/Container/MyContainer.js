import React from "react";

function MyContainer(props) {
  return (
    <div className="container" style={{ padding: 0 ,marginTop:20,marginLeft:0,marginRight:0,marginLeft:0}}>
      <div className="row">
          {props.children}
      </div>
    </div>
  );
}

export default MyContainer;

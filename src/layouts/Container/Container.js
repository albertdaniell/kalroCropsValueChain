import React from "react";

function Container(props) {
  return (
    <div className="container" style={{ padding: 0 }}>
      <div className="row">
          {props.children}
      </div>
    </div>
  );
}

export default Container;

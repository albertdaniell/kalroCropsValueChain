import React from "react";

function TextRow(props) {
  return (
    <div className="col-sm-6" style={{}}>
      {props.children}
    </div>
  );
}

export default TextRow;

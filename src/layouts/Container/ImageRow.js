import React from "react";

function ImageRow(props) {
  const { src, divDim } = props;
  return (
    <div className={divDim} style={{}}>
      <p>
        <img
          src={src}
          style={{ height: "auto", width: "100%", marginBottom: 20 }}
        ></img>
      </p>
    </div>
  );
}

export default ImageRow;

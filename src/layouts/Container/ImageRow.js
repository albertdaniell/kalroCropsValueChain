import React from "react";

function ImageRow(props) {
  const { src, divDim,caption } = props;
  return (
    <div className={divDim} style={{}}>
      <p>
        <img
          src={src}
          style={{ height: "auto", width: "100%", marginBottom: 20 }}
        ></img>
        <center><span style={{fontStyle:'italic',marginTop:0,textAlign:"center"}}>{caption}</span></center>
      </p>
    </div>
  );
}

export default ImageRow;

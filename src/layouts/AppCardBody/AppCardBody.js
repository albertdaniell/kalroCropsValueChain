import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext/AppContext";

function AppCardBody(props) {
  const {appLanguage}=useContext(AppContext)
  const [buttonText]=useState(appLanguage==='1'?'Read More':'Thoa Makiria')
  return (
    <div>
      <div class="card-body">
        <p>{props.children}</p>
        <Link to={props.to} class="btn btn-primary">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default AppCardBody;

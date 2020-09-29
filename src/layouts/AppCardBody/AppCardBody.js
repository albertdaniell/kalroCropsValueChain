import React from "react";
import { Link } from "react-router-dom";

function AppCardBody(props) {
  return (
    <div>
      <div class="card-body">
        <p>{props.children}</p>
        <Link to={props.to} class="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default AppCardBody;

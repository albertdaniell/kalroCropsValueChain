import React from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

function Next(props) {
  return (
    <div style={{textAlign:'center'}}>
     <hr style={{width:'5%'}}></hr>
      
        <Link to={props.to} style={{ color: "white" }}>
          <Button size="medium" variant="outlined" color="primary">
            Next {props.pageToGo} 
          </Button>
        </Link>
       
        <hr style={{width:'5%'}}></hr>
    </div>
  );
}

export default Next;

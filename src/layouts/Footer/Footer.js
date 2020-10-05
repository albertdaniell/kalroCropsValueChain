import React from 'react'


function Footer(props) {
    return (
        <div className="container-fluid" id="footer">
            <br></br> <br></br> 
            <div className="container-fluid">
                <div className="row">
             
                   <div className="col-sm-9" style={{fontSize:12,marginTop:20,padding:30}}>
    <h4 id="appLogo" style={{}}>{props.appName}</h4> <hr></hr>
                   
                   <span> © 2020 All Rights Reserved. </span> <br></br>
                   
                   <span>No part of this site may be reproduced without permission.</span>
                
                   </div>
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default Footer

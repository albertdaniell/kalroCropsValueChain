import React from 'react'


function Footer() {
    return (
        <div className="container-fluid" id="footer">
            <br></br> <br></br> 
            <div className="container-fluid">
                <div className="row">
                   <div className="col-sm-3" style={{marginTop:20}}>
                       <span>Coming Soon Apps</span>
                       <hr></hr>
                  <a href="#">Dairy Goat App</a>
                  <a href="#">Sheep App</a>
                 
                
                   </div>
                   <div className="col-sm-9" style={{fontSize:12,marginTop:20}}>
                   <h4 id="appLogo" style={{}}>Poultry App</h4> <hr></hr>
                   <span>Compiled by GEOFFREY M. IRUNGU</span> <br></br>
                   <span>Livestock Production Officer</span> <br></br>
                   <span>P.O.BOX 11219-00400 NAIROBI TEL: 0787890921</span> <br></br>
                   <span>buffadsteam@gmail.com</span> <br></br>
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

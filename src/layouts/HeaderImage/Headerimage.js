import React from 'react'
import LanguageChange from '../LanguageChange/LanguageChange'
function Headerimage(props) {
    const {pageHeader,img}=props
    return (
        <div id="headerImg" style={{backgroundImage:`url(${img})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <div style={{backgroundColor:'rgba(173, 153, 87, 0.16)',color:'white',position:'absolute',height:250,width:'100%'}}>
              
                <div id="headerHeading" className="animate__animated animate__fadeInDown">
                    {pageHeader}
                </div>
            </div>
        </div>
    )
}

export default Headerimage

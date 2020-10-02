import React from 'react'
import image1 from '../../images/kalrologo90-64-2.gif'
import image2 from '../../images/laikipia_emblem.png'


function OrgLogos() {
    return (
        <div id='appLogos'>
            <img src={image1}></img>
            <img src={image2} id='appLogoimg2'></img>
        </div>
    )
}

export default OrgLogos

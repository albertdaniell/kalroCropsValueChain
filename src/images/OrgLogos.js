import React from 'react'
import image1 from '../../images/kalrologo90-64-2.gif'
import image2 from '../../images/laikipia_emblem.png'
import image3 from '../../images/ACWICT.png'

function OrgLogos() {
    return (
        <div id='appLogos'>
          <a href='https://kalro-cropslivestock.web.app/'>
          <img src={image2} id='appLogoimg2'></img>
          <img src={image1}></img>
          <img src={image3}></img>
            
          </a>
        </div>
    )
}

export default OrgLogos

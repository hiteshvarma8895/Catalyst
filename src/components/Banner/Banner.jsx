import React from 'react';
import "./Banner.scss"
import { shallowEqual, useSelector } from 'react-redux';
import bannerimg from "../../assets/bannerimage.png"

function Banner() {
 
  return (
    <div className="banner">
      <div className='gradient'>

      </div>
     <img src={bannerimg}/>
      <div className='bannercontent'>
        <h1>Latest Styles</h1>
        <p>At Yesterday’s Prices</p>
        <button className='browsebutton'>BROWSE ALL STYLES</button>
      </div>
    </div>
  )
}

export default Banner
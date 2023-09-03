import React from 'react'
import { useState} from 'react';
import Popup from '../Components/Popup';
import {Link} from 'react-router-dom';

function SectionOne() {
  const [buttonPopup, setButtonPopup]= useState(false); 

  return (
    <div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>We are closed.</h3>
        <p className='popup-1st-p'>While we are closed, you can place an online pre-order.</p>
        <p>Unless you specify your preferred time while checking out, the order will be prepared in accordance with the processing time after 16:30.</p>
        



      </Popup>
        <div><img className='section1-img' src='/images/section-img_1.png' alt=''></img></div>
        <div className='discount-div'>
          <p className='discount'>Discount available online | open 7 days a week</p>
          <div className='order-btnz-div'><button onClick={() => setButtonPopup(true)} className='order-btnz'>Order indian 15% off</button></div>
          <div className='order-btnz2-div'><Link to="/blog"><button className='order-btnz2'>Order vegas</button></Link></div>
        </div>
    </div>
  )
}

export default SectionOne
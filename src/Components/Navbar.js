import React from 'react';
import {Link} from "react-router-dom"




function Navbar() {
  return (
    <div className='Navbar'>
      <div className='navbar-brand-name'>
      <h1 className='streatfood'><span className='brand-name-color-red'>S</span><span className='brand-name-color-green'>tr</span><span className='brand-name-color-yellow'>eat</span><span >f</span><span className='brand-name-color-red-apple'>oo</span><span className='brand-name-color-black'>d</span><span className='brand-name-color-red'>Z</span><span className='brand-name-color-black'>.</span></h1>
      </div>
      <div className='navbar-list-items'>
        <ul className='navbar-content'>
          <li className='List-btn home-btn'>< Link to="/" className='link1'>Home</Link></li>
          <li className='List-btn'><Link to="/blog" className='link1'>Order online</Link></li>
          <li className='List-btn'><Link to="/menu" className='link1'>Takeaway menu</Link></li>
          <li className='List-btn'><Link to="/us" className='link1'>Contact us</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
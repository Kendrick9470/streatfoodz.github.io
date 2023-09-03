import React from 'react'
import './Popup.css'

function RegistrationPopup(props) {
  return (props.trigger) ? (
    <div className='popup2'>
        <div className='inner-popup2'>
        <button className='close-btn2' onClick={()=>props.setTrigger(false)}>close</button>
         {props.children}

        </div>
    </div>
  ): ""
}

export default RegistrationPopup
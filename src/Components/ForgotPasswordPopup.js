import React from 'react'
import './Popup.css'


function ForgotPasswordPopup(props) {
  return (props.trigger) ? (
    <div className='popup3'>
        <div className='inner-popup3'>
        <button className='close-btn3' onClick={()=>props.setTrigger(false)}>close</button>
         {props.children}
        </div>

    </div>
  ): ""
}

export default ForgotPasswordPopup
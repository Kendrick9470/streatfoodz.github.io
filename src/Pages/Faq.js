import React from 'react'
import Navbar from '../Components/Navbar'
import {useState} from "react"

function Faq() {
    const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected==i) {
      return setSelected (null)

    }

    setSelected (i)
   
  }
    

    const data = [

        {
            Question:'I want my food to be delivered Asap. How do i request that ?',
            Answer:'Login and place your order it will be delivered to you ',

        },

        {

            Question:'I want my food to be delivered at later time. How do i request  that ?',
            Answer:'After placing your order send us a message',
            
        },

        {
            Question:'I forgot to select time during checkout. How do i request selection or delivery time?',
            Answer:'Send us message specifying your time',

        },

        {
            Question:'I have forgotten my password how do i reset my password ?',
            Answer:'Go to login below your will see forgot password click to input your email or password you used for registrations',
        },

        {
            Question:'How do i change my existing password ?',
            Answer:'Go to forgot password',
        },

        {

            Question:'Is it safe to pay by Paypal or card ?',
            Answer:'Yes it is save as far as you loginin to our official website',

        },

        {
            Question:'How do i know that my order is paid when i pay with PayPay or Card ?',
            Answer:'If you received a successful popup message',

        },

        {
            Question:'I want to place order online but will pay by card when collecting my order is it possible ?',
            Answer:'Yes it is possible',
        },

        {
            Question:'Can i pay by Apple pay or Google pay ?',
            Answer:'Yes',
        },

        {
            Question:'Is it safe to give my details during registrations',
            Answer:'yes it is as far as you re in our official website',
        },


    ]


  return (
    <div>
        <Navbar/>
        <div className='faq-main-div'>
            <div className='faq-div1'>
                <img className='faq2-img' src='/images/faq2.PNG' alt=''></img>
                <p className='faqp1'>Frequently asked question (FAQ)</p>
                <p className='faqp2'>Find answers to frequently asked questions.</p>
            </div>

            <div className='wrapper2'>
                <div className='accordion2'>
                {data.map((item, i)=> (
                  <div className='item2'>
                    <div className='title2' onClick={()=> toggle(i)}>
                      <h6 className='item-hover2'>{item.Question}</h6>
                      <span className='arrow'>{selected==i ? 'v' : '^'}</span>
                     </div>
                      <div className={selected==i ? 'content-show' : 'content2'}><p>{item.Answer}</p></div>
                    </div>

))}
                    


                </div>
                
            </div>
            </div>

                <div>
                <p className='faq-footer'>&copy;2023 The <span>S</span><span className='brand-name-color-green'>tr</span><span className='brand-name-color-yellow'>eat</span><span>f</span><span className='brand-name-color-red'>oo</span><span>d</span><span className='brand-name-color-red'>z</span> website is maintained by <a href='https://www.exatechhub.com'>Exatechhub developers team</a></p>
                </div>
    </div>
  )
}

export default Faq
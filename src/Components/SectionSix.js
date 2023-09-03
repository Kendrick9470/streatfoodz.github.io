import React from 'react'

function SectionSix() {
  return (
    <div className='section6-div1'>
      <div className='section6-div2'>
        <h4><span className='brand-name-color-red'>INFOR</span><span className='brand-name-color-green'>MATIONS</span></h4>
        <p>Sunday-Thursday : 6:30am-11:oopm</p>
        <p>Friday-Saturday : 4:30am-12pm</p>
        <p>73 Mythe street DartfordDA1 18G</p>
        <p>09011388084</p>
      </div>
      <div className='section6-div3'>
        <h4><span className='brand-name-color-yellow'>QUICK</span> <span className='brand-name-color-green'>LINKS</span></h4>
        <ul className='footer-ul-list'>
        <li>Home</li>
        <li>Order Online</li>
        <li>Takeaway</li>
        </ul>
      </div>
      <div className='section6-div4'>
        <h4 className='news'><span className='brand-name-color-red'>NEWS<span className='brand-name-color-green'>LETTERS</span></span></h4>
       <p className='newsletter-p'> Kindly signup to keep you up to date on our menus</p>
       <form>
        <div className='form-div'>
        <button className='newsletter-btn'>Sign up</button>
       
       <input className='newsletter-input' type='text' placeholder='Your Email'></input>
       </div>
       </form>
      </div>
        
    </div>
  )
}

export default SectionSix 
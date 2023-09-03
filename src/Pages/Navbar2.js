import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
import Faq from './Faq';
import {useState} from "react"




function Navbar2() {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected==i) {
      return setSelected (null)

    }

    setSelected (i)
   
  }
  const data =[
    {

        List:'Starter',
        Contents:'Onion Bhaji',
        chicken:'Chicken Pak',
        samosa:'Vegetable S',
        lamb:'Lamb Samosa',
        raja:'Raja Specia',
        




    },

    {
        List:'Tandoori',
        Contents:'Chicken Tik',
        chicken:'Lamb Tikka.',
        samosa:'King Prawn.',
        lamb:'Vegetable P',
        raja:'Tandoori C.',


    },

    {
        List:'Korma',
        Contents:'Chicken K..',
        chicken:'Chicken Tik',
        samosa:'Lamb Korma.',
        lamb:'Lamb Tikka.',
        raja:'Prawn Korma',
        

    },
     
    {

        List:'Rice',
        Contents:'Boiled Rice',
        chicken:'Pilau Rice.',
        samosa:'Special Rice',
        lamb:'Egg Fried..',
        raja:'Vegetable R',
        
    },

    {

        List:'Kids Meal',
        Contents:'Chicken Tik',
        chicken:'Chicken Bhu',
        samosa:'Chicken Kor',
        lamb:'Butter Chic',
        raja:'Chicken Nug',

    },

    {

        List:'Drinks',
        Contents:'Coke Can...',
        chicken:'Diet Coke..',
        samosa:'7up.......',
        lamb:'Tango......',
        raja:'Coke Bottle',
      
        
    },

    {
        List:'Raja Bakery',
        Contents:'Plain Naan.',
        chicken:'Peshwari N.',
        samosa:'Garlic Naan',
        lamb:'Cheese Naan',
        raja:'Kolsuma N..',
      

    },

    {

        List:'Side Dishes',
        Contents:'Alo Gobi...',
        chicken:'Bombay Alo.',
        samosa:'Couliflower',
        lamb:'Chana Bhaji',
        raja:'Mixed Veget',
      




    },

    {
      List:'Sundries',
      Contents:'Poppadom ..',
      chicken:'Plain Raita',
      samosa:'Onion Raita',
      lamb:'Cucumber C.',
      raja:'King Prawn.',

    }




]

  const date = new Date();
  const currentTime = date.getHours;
  let available;

  if (currentTime < 12) {
    available = "Order available Morning Food"
    

  } else if (currentTime < 18) {
    available = "Order available afternoon food"

  } else {
    available = "Order available delicious food here"
  }
  
  return ( 
       <div>

        <div className='navbar-import'><Navbar/></div>
        <div className='order-div1'>
          <div className='order-div2'>
            <h4><span className='brand-name-color-red'>Order</span><span className='brand-name-color-yellow'>ing</span></h4>
           </div>
           <div className='order-div3'>
            <ul className='order-ul'>
              <li className='order-li1'><Link to="/login" className='log'>Login</Link></li>
              <li className='order-li2'><Link to="/login" className='log'>Register</Link></li>
              <li className='order-li3'><Link to="/faq" className='log'>FAQ</Link></li>
            </ul>
            </div>
            <div className='cas'>
              <div className='order-cat'>
              <h2 className='order-food'>{available}</h2>
              <div className='order-cat2'>
            <h5 className='categories'>Categories</h5>            
            <div className='catego wrapper'>
              <div className='accordion'>
                {data.map((item, i)=> (
                  <div className='item'>
                    <div className='title' onClick={()=> toggle(i)}>
                      <h6 className='item-hover1'>{item.List}</h6>
                      <span>{selected==i ? 'v' : '^'}</span>
                     </div>
                      <div className={selected==i ? 'content-show' : 'content'}><p>{item.Contents}<span className='dollar'>$7</span><button className='start-btn'>Add</button></p><p>{item.chicken}<span className='dollar'>$5</span><button className='start-btn'>Add</button></p><p>{item.raja}<span className='dollar'>$3</span><button className='start-btn'>Add</button></p><p>{item.lamb}<span className='dollar'>$2</span><button className='start-btn'>Add</button></p></div>
                    </div>

))}

              </div>
            
               
            </div>
          
         </div>
         <div className='order-cat3'>
         <img className='order-img' src='/images/section-img_1.png' alt=''></img>
         </div>
         <div className='order-cat4'>
          <h6>The <span className='brand-name-color-red'>S</span><span className='brand-name-color-green'>tr</span><span className='brand-name-color-yellow'>eat</span>f<span className='brand-name-color-red'>oo</span>d<span className='brand-name-color-red'>Z</span> in Dartford</h6>
          <p>Hythe street, Dartford.Kent DA1 1BG</p>
          <p><img className='star-img' src='/images/star.PNG' alt=''></img> <span className='order-paragraph2'><Link>18 Reviews</Link></span></p>
          <h6 className='meal'>ENJOY 15% OFF online over $20 exc.Set Meals + FREE Delivery</h6>
          <p className='menu-para'>Menu</p>
          <p className='review-para'>Reviews</p>
          <p className='info-para'>Info</p>
         </div>
         <div className='order-cat5'>
          <h6 className='deli'><img className='delivery-img' src='/images/delivery.PNG'></img>Delivery</h6>
          <p className='delip'>55 Minutes</p>
          <h6 className='colle'><img className='collection-img' src='/images/collection.PNG'></img>Collection</h6>
          <p className='collp'>35 Minutes</p>
         </div>
         <div className='order-cat6'>
          <h6 className='takeaway'>Takeaway Bag</h6>
          <img className='items-img' src='/images/items.PNG'></img>
          <div className='order-add'>
          <p className='menu-p'>Add menu items into your basket</p>
          <p className='menu-pr'><span className='brand-name-color-red'>Order will be prepared after 16:30 </span> (according to the the processing time unless you und ered ontime)</p>
          </div>
         </div>
         <div className='order-cat7'>
         <p><Link>Do you have any allergy or other dietary requirement?</Link></p>

         </div>

         <div className='category wrapper'>
         <div className='accordion'>
                {data.map((item, i)=> (
                  <div className='item'>
                    <div className='title' onClick={()=> toggle(i)}>
                      <h6 className='item-hover1'>{item.List}</h6>
                      <span>{selected==i ? 'v' : '^'}</span>
                     </div>
                     <div className={selected==i ? 'content-show' : 'content'}><p>{item.Contents}<span className='dollar'>$7</span><button className='start-btn'>Add</button></p><p>{item.chicken}<span className='dollar'>$5</span><button className='start-btn'>Add</button></p><p>{item.raja}<span className='dollar'>$3</span><button className='start-btn'>Add</button></p><p>{item.lamb}<span className='dollar'>$2</span><button className='start-btn'>Add</button></p></div>
                    </div>

))}

              </div>
            
              
          
        
        
             
         </div>

              </div>
            </div>

        </div>
        <div className='footer-import'><Footer/></div>
        
  </div>
    
 )
}

export default Navbar2
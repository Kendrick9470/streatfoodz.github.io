import React from 'react'

function SectionTwo() {
  return (
    <div className='section2div-img sectiontwo'>
        <div className='section2-img4div'><img className='section2-img4' src='/images/img.jpg' alt=''></img></div>
        <div><img className='section2-img5' src='/images/img6.jpg' alt=''></img></div>
        <div className='dish-ingredients1'>
        <h4 className='ingredients-h4 ing'>Fresh</h4>
          <p className='ingredients-p'>We use fresh and finest ingredients from trusted suppliers</p>
        </div>

        <div className='dish-ingredients2'>
          <h4>
            <span className='dish-ingredients-span1'>Tikka</span><span className='dish-ingredients-span2'> Masalla</span> 
          </h4>
          <p className='ingredients-p'>A dazzling sweet dish cooked with a whole variety of herbs and spices</p>
        </div>
        <div className='dish-ingredients3'>
          <h4><span className='dish-ingredients-span3'>Tandoori </span> <span className='dish-ingredients-span4'>Mix</span> <span className='dish-ingredients-span5'>Grill</span></h4>
          <p className='ingredients-p'>Contains Chicken tikka, lamb tikka, sheek kebab, tandoori chicken and tandoori king prawn</p>
        </div>

    </div>
  )
}

export default SectionTwo
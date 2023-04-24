import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'
function Hero() {
  return (
    <>
      <div className='Navbar_div'>
      <Navbar></Navbar>
      </div>
     <div className='head'>
        <div className='head1'>
        <h4>Re imagining the way you shop</h4>
        </div>

        <div className ="head2">
        <h4>Introducing SIMUVERSE</h4>
        </div >

        <div className='head3'>
        <h6>Click on the explore button below to know more about SimuVerse.</h6>
        </div>

        <button className='explore-button'>
            <h5>Explore</h5>
        </button>

        <div className='image1'>
           {/* <image></image> */}
           </div>
    </div>

    </>
  )
}

export default Hero
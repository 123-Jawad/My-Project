import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import { Link } from 'react-router-dom'

function Weeding2() {
  return (
    <div>
       {/* owl carousel section start--------------------------*/}
<div id="intro">
          <div className="container">
            <h1 className="text-center" id="rooms-home-link">Rooms</h1>
            <img src="images/image (4).png" alt="" className="img-fluid justify-content-center" id="border" />
          </div>
        </div>
       
    
     <div className="wrapper">
          {/* <div className="owl-carousel owl-theme img-carousel"> */}
            
          {/* </div> */}
          <OwlCarousel
    className="Owl-theme"
    items="4"
    autoplay
    nav
    dots
    loop
    >
      <div className="item">
              <Link to="/standard"><img src="images/couple1.jpg" alt="" /></Link> 

            </div>
            <div className="item">
              <Link to="/deluxe"><img src="images/couple2.jpeg" alt="" /></Link>

            </div>
            <div className="item">
              <Link to="/executive"><img src="images/couple2.jpg" alt="" /></Link>

            </div>
            <div className="item">
              <Link to="/executive"><img src="images/couple5.jpeg" alt="" /></Link>

            </div>

            </OwlCarousel>

            </div>


    </div>
  )
}

export default Weeding2
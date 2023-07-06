import React from 'react'
import { Link } from 'react-router-dom'

function Owlcarousel() {
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
            <div className="item">
              <Link to="/standard"><img src="images/standard.jpg" alt="" /></Link> 
              <h3 className="heading-fonts">Standard</h3>
              <p>Our standard rooms offer chicly-designed interiors and a range of modern amenities to ensure that you enjoy a relaxed and comfortable stay.</p>
              <a href><button  className="owl-btn">Book now</button></a> 
            </div>
            <div className="item">
              <Link to="/deluxe"><img src="images/deluxe.jpg" alt="" /></Link>
              <h3 className="heading-fonts">Deluxe</h3>
              <p>Inspired by the vivid cultural history of Lahore, the Deluxe Room furnishes character with old-school charm that looks awesome</p>
              <a href><button className="owl-btn">Book now</button></a> 
            </div>
            <div className="item">
              <Link to="/executive"><img src="images/executive.jpg" alt="" /></Link>
              <h3 className="heading-fonts">Executive</h3>
              <p>Designed with chic and contemporary décor, our Executive Room furnishes a King-sized bed, a spacious bathroom, a writing desk and a minibar.</p>
              <a href><button className="owl-btn">Book now</button></a> 
            </div>
            <div className="item">
              <Link to="/luxury"><img src="images/luxury.jpg" alt="" /></Link> 
              <h3 className="heading-fonts">Luxury Suite</h3>
              <p>Luxuriate yourself in our elegantly-designed Presidential Suite comprising of various impeccable facilities design specially for a modern life style</p>
              <a href><button className="owl-btn">Book now</button></a> 
            </div>
          {/* </div> */}
        </div>

    </div>
  )
}

export default Owlcarousel
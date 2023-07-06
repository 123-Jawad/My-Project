import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import Offer1 from './Offer1'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Offer() {
  useEffect(() => {
    Aos.init();
   }, [])

  return (
    <div>
    {/* Social icon top ---------------------*/}
    <div className="social-menu">
      <ul>
        <li><a href="https://www.facebook.com" target="blank"><i className="bi bi-facebook" /></a>
        </li><li><a href="https://www.instagram.com" target="blank"><i className="bi bi-instagram" /></a></li>
        <li><a href="https://www.linkedin.com" target="blank"><i className="bi bi-linkedin" /></a></li>
        <li><a href="https://www.bi-twitter.com"><i className="bi bi-twitter" /></a></li>
      </ul>
    </div>
    {/* Navbar start---------------------*/}
   
   {/* Booking section header ---------------------*/}
   <div className="booking" data-aos="zoom-in-right">
        <h2><b>Meeting Package</b></h2>
        <p>Start from PKR 3,000
        </p>
        <p>Our business Centre are Perfect For Distance While Getting All Your Work Done In a Safe &amp; Quiet Private office</p>
        <button>book now</button>
      </div>

    <div className='carousel'>
    <nav className='nav'>
      <div className="logo">Marina Hotel</div>
      <label htmlFor="btn" className="icon">
        <span className="fa fa-bars" />
      </label>
      <input type="checkbox" id="btn" />
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li>
          <label htmlFor="btn-1" className="show">Rooms &amp; Suites <i className="bi bi-chevron-down" /></label>
          <a href="#intro">Rooms &amp; Suites <i className="bi bi-chevron-down" /></a>
          <input type="checkbox" id="btn-1" />
          <ul>
            <li><Link to="/standard">Standard</Link></li>
            <li><Link to="/deluxe">Deluxe</Link></li>
            <li><Link to="/executive">Executive</Link></li>
            <li><Link to="/luxury">Luxury</Link></li>
          </ul>
        </li>
        <li>
          <label htmlFor="btn-2" className="show">Events &amp; Celebrations <i className="bi bi-chevron-down" /></label>
          <a href="#">Events &amp; Celebrations <i className="bi bi-chevron-down" /></a>
          <input type="checkbox" id="btn-2" />
          <ul>
            <li><Link to="/meeting">Metting&amp;Events</Link></li>
            <li><Link to="/wedding and celebration">Wedding &amp; Celebrations</Link></li>
          </ul>
        </li>
        <li><Link to="/offer">Offers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    
         <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/office.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h2>Luxury Office</h2>
        <p>In Perfect Budget</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/office2.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Best Rooms</h2>
          <p>In Best Budget</p>
        </Carousel.Caption>
      </Carousel.Item>
         </Carousel>
    </div>
    <Offer1/>
    </div>
  )
}

export default Offer
import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './slider.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Slider() {
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
          <h2>Book your Room Now!</h2>
          <div className="from">
            <label>From:</label><input className="form-control" type="date" required />
          </div>
          <div className="to">
            <label>To:</label><input className="form-control" type="date" required />
          </div>
          <div className="form-group">
            <span><label>Guests</label></span>
            <select className="form-control">
              <option>1</option>
              <option>2</option>
            </select>
            <span className="select-arrow" />
          </div>
          <button> <Link style={{color:"white", textDecoration:"none"}} to="/reservation" >Book now</Link></button>
        </div>


    <div className='carousel'>
    <nav className='nav'>
      <div className="logo">Marina Hotel</div>
      <label htmlFor="btn" className="icon">
        <span className="fa fa-bars" />
      </label>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li>
          <label htmlFor="btn-1" className="show">Rooms &amp; Suites <i className="bi bi-chevron-down" /></label>
          <a href="#intro">Rooms &amp; Suites <i className="bi bi-chevron-down" /></a>
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
          src="images/deluxe.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Welcome to Marina</h2>
          <p>The place where we are looking to</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/executive.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Best Rooms</h2>
          <p>In Best Budget</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/responsive header.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>We Provide The Best</h2>
          <p>Room Service In Subcontinent</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}

export default Slider
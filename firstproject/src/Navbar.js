import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Main from './Main'
import Owlcarousel from './Owlcarousel'
import Owlcarousel2 from './Owlcarousel2'
import Service from './Service'
import Slider from './Slider'
function Navbar() {
  return (
    <div>
  
    {/* Social icon top ---------------------*/}
    {/* <div className="social-menu">
      <ul>
        <li><a href="https://www.facebook.com" target="blank"><i className="bi bi-facebook" /></a>
        </li><li><a href="https://www.instagram.com" target="blank"><i className="bi bi-instagram" /></a></li>
        <li><a href="https://www.linkedin.com" target="blank"><i className="bi bi-linkedin" /></a></li>
        <li><a href="https://www.bi-twitter.com"><i className="bi bi-twitter" /></a></li>
      </ul>
    </div> */}
    {/* Navbar start---------------------*/}
    {/* <nav>
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
    </nav> */}
    <Slider/>
    <About/>
    <Owlcarousel2/>
    <Service/>
    </div>  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import Standard2 from './Standard2'
import Standard3 from './Standard3'


function Standard() {
  return (
    <div>  <div className="Standard-header">
    {/* Social icon top ---------------------*/}
    <div className="social-menu">
      <ul>
        <li><a href="https://www.facebook.com" target="blank"><i className="bi bi-facebook" /></a>
        </li><li><a href="https://www.instagram.com" target="blank"><i className="bi bi-instagram" /></a></li>
        <li><a href="https://www.linkedin.com" target="blank"><i className="bi bi-linkedin" /></a></li>
        <li><a href="https://www.spotify.com"><i className="bi bi-twitter" /></a></li>
      </ul>
    </div>
    {/* Navbar start---------------------*/}
    <nav>
      <div className="logo">Marina Hotel</div>
      <label htmlFor="btn" className="icon">
        <span className="fa fa-bars" />
      </label>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li>
          <label htmlFor="btn-1" className="show">Rooms &amp; Suites <i className="bi bi-chevron-down" /></label>
          <a href="index.html">Rooms &amp; Suites <i className="bi bi-chevron-down" /></a>
          <ul>
            <li><Link to="/standard">Standard</Link></li>
            <li><Link to="/deluxe">Deluxe</Link></li>
            <li><Link to="/executive">Executive</Link></li>
            <li><Link to="/luxury">Luxury</Link></li>
          </ul>
        </li>
        <li>
          <label htmlFor="btn-2" className="show">Events &amp; Celebrations <i className="bi bi-chevron-down" /></label>
          <a href="standard.html">Events &amp; Celebrations <i className="bi bi-chevron-down" /></a>
          <ul>
            <li><Link to="/meeting">Metting&amp;Events</Link></li>
            <li><Link to="/wedding and celebration">Wedding &amp; Celebrations</Link></li>
          </ul>
        </li>
        <li><Link to="/offer">Offers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <div className="standard-content">
      <div className="standard-heading">
        <h1>Standard Room</h1>
        <img src="images/image (4).png" alt="border" id="standard border" className="img-fluid" />
      </div>
      <div className="button-s">
        <button id="stand-btn"><Link href to="/reservation">Book</Link></button>
      </div>
    </div>
    <div className="sroll">
      <Link to="/standard"><i className="bi bi-chevron-down" /></Link>  
    </div>
    </div>
            {/* header end--------------------------------------------------------*/}
           
       <Standard2/>
       <Standard3/>
    </div>
  )
}

export default Standard
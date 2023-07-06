import React from 'react'
import { Link } from 'react-router-dom'
import Meeting2 from './Meeting2'
import Meeting3 from './Meeting3'
import Meeting4 from './Meeting4'

function Meeting1() {
  return (
    <div><div className="meeting-header">
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
      <input type="checkbox" id="btn" />
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li>
          <label htmlFor="btn-1" className="show">Rooms &amp; Suites <i className="bi bi-chevron-down" /></label>
          <a href="index.html">Rooms &amp; Suites <i className="bi bi-chevron-down" /></a>
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
          <Link to="/meeting">Events &amp; Celebrations <i className="bi bi-chevron-down" /></Link>
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
    {/* HEADER TEXT */}
    <div className="meeting-header-text">
      <h1>Meetings &amp; Events</h1>
      <p>Create Unique Experience</p>
    </div>
  </div>
  {/* header end--------------------------------------------------------*/}
    
    <Meeting2/>
    <Meeting3/>
    <Meeting4/>
    </div>
  )
}

export default Meeting1
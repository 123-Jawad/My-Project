import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
               <div className="contact-header">
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
        {/* Enquire-form */}
        <section id="contact">
          <h1 className="section-header">Contact</h1>
          <div className="contact-wrapper">
            {/* Left contact page */} 
            <form id="contact-form" className="form-horizontal" role="form">
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="text" className="form-control" id="input1" placeholder="NAME" name="name" defaultValue required />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input type="email" className="form-control" id="input1" placeholder="EMAIL" name="email" defaultValue required />
                </div>
              </div>
              <textarea className="form-control" rows={10} placeholder="MESSAGE" name="message" id='input2' required defaultValue={""} />
              <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                <div className="alt-send-button">
                  <i className="fa fa-paper-plane" /><span className="send-text">SEND</span>
                </div>
              </button>
            </form>
            {/* Left contact page */} 
            <div className="direct-contact-container">
              <ul className="contact-list">
                <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">City, State</span></i></li>
                <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
                <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
              </ul>
              <hr />
              <ul className="social-media-list">
                <li><a href="https://www.facebook.com" className="contact-icon">
                    <i className="bi bi-facebook" /></a>
                </li>
                <li><a href="https://www.facebook.com" className="contact-icon">
                    <i className="bi bi-whatsapp" /></a>
                </li>
                <li><a href="https://www.facebook.com" className="contact-icon">
                    <i className="bi bi-twitter" /></a>
                </li>
                <li><a href="https://www.facebook.com" className="contact-icon">
                    <i className="bi bi-instagram" /></a>
                </li>       
              </ul>
              <hr />
              <div className="copyright">© ALL OF THE RIGHTS RESERVED BY MARINA </div>
            </div>
          </div>
          <div style={{backgroundColor:"goldenrod", height:"200px"}}></div>

        </section>
      </div>
        
    </div>
  )
}

export default Contact
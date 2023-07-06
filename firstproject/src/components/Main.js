import React from 'react'
import { Link } from 'react-router-dom'

function Main() {

  return (
    <div>     
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
          <button> <Link style={{color:"black", textDecoration:"none"}} to="/reservation" >book now</Link></button>
        </div>
        {/* Header Carousel start---------------------*/}
        <div id="carousel1">
          <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators " id="carousel-ind">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>

            <div className="carousel-inner" data-bs-interval={5000}>
              <div className="carousel-item active">
                <img src="images/deluxe.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption  d-md-block" id="content">
                  <h2>Welcome to Marina</h2>
                  <p>The place where we are looking to</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval={5000}>
                <img src="images/executive.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption  d-md-block">
                  <h2>Best Rooms</h2>
                  <p>In Best Budget</p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval={5000}>
                <img src="images/responsive header.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption  d-md-block">
                  <h2>We Provide The Best</h2>
                  <p>Room Service In Subcontinent</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon  d-none d-md-block" aria-hidden="true" />
              <span className="visually-hidden" onClick={()=>{}}>Previous</span>
            </button>
            <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon  d-none d-md-block " aria-hidden="true" />
              <span className="visually-hidden" onClick={() =>{}}>Next</span>
            </button>
          </div>
        </div>
      
   
    
    

        
    </div>
  )
}

export default Main
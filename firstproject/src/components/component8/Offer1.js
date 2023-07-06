import React from 'react'
import { Link } from 'react-router-dom'

function Offer1() {
  return (
    <div>
                {/* metting enqire ---------------------------------*/}
                <div className="meeting-info">
          <div className="meeting-info-cont">
            <h2>
              Featured Offer
            </h2>
            <p>
              Find the best deals with exclusive discounts and amazing perks. Whether you’re looking for a city break or a recuperating escape, we have something for you. With an excellent selection of 5-star hotels available in top locations all over Pakistan, whatever your destination we have the perfect place.
            </p>
            <div className="button-s">
              <button id="stand-btn"><Link to="/reservation">Enquire</Link></button>
            </div>
          </div>
        </div>
        {/* services section---------------------------------*/}
        <div className="container-fluid" id="services">
          <div className="container" id="services-cont">
            <p data-aos="zoom-in">Marina Hotel</p>
            <h5 data-aos="zoom-in">OUR Offers</h5>
            <div className="row">
              <div className="col-md-3 " id="service1" data-aos="zoom-in">
                <img src="images/credit card.jpg" alt="" />
                <h3>
                  Valid for a limited time only
                </h3>
                <p>
                  PRIVILEGE CLUB CARD ON INSTALLMENTS AT 0% MARKUP
                </p>
              </div>
              <div className="col-md-3" id="service1" data-aos="zoom-in">
                <img src="images/office.jpg" alt="" />
                <h3>
                  Subject to availability
                </h3>
                <p>
                  CAN'T WAIT TO GET BACK TO OFFICE?
                </p>
              </div>
              <div className="col-md-3" id="service1" data-aos="zoom-in">
                <img src="images/office2.webp" alt="" />
                <h3>
                  MEETING PACKAGE
                </h3>
                <p>
                  For 10 - 40 Persons
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Our Discount section ----------------------------------------------*/}
        <div className="container-fluid" id="discount-container">
          <div className="container">
            <div className="discount" id="discount-content">
              <div className="row">
                <div className="col-md-5">
                  <h2>
                    Summer Promo 50% Off
                  </h2>
                  <button>AVAIL NOW</button>
                </div>
                <div className="col-md-7">
                  <p>THE PROMO WILL START IN</p>
                  <h2>00 weeks 00 days 00 hr 00 min 00 sec</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* galle */}
    </div>
  )
}

export default Offer1
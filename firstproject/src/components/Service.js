import React from 'react'

function Service() {
  return (
    <div>
                {/* services section---------------------------------*/}
                <div className="container" id="services">
          <div  id="services-cont">
            <p data-aos="zoom-in">OUR SERVICES</p>
            <h5 data-aos="zoom-in">Hotel Facilities</h5>
            <div className="row">
              <div className="col-md-4 " id="service1" data-aos="zoom-in">
                <img src="images/airplane.png" alt="" />
                <h3>
                  Pick Up &amp; Drop
                </h3>
                <p>
                  We will pick you up from the airport when you are comfortable on your ride.
                </p>
              </div>
              <div className="col-md-4" id="service1" data-aos="zoom-in">
                <img src="images/car (1).png" alt="" />
                <h3>
                  Parking Space
                </h3>
                <p>
                  We will provide you with open and spacious space to park your car anywhere
                </p>
              </div>
              <div className="col-md-4" id="service1" data-aos="zoom-in">
                <img src="images/hotel.png" alt="" />
                <h3>
                  Room Service
                </h3>
                <p>
                  Our hotel rooms are very open and spacious.Which are made in modern style
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3" id="service1" data-aos="zoom-in">
                <img src="images/swimming-pool.png" alt="" />
                <h3>
                  Swimming Pool
                </h3>
                <p>
                  Our hotel also has a swimming pool through which you can enjoy and spent your time
                </p>
              </div>
              <div className="col-md-3" id="service1" data-aos="zoom-in">
                <img src="images/wifi-router.png" alt="" />
                <h3>
                  Fibre Internet
                </h3>
                <p>
                  Wi-Fi is available in every room of our hotel so you can connected with family and friends
                </p>
              </div>
              <div className="col-md-3" id="service1" data-aos="zoom-in">
                <img src="images/coffee.png" alt="" />
                <h3>
                  Fine Dining
                </h3>
                <p>
                  Marina Hotel is an opportunity for friends and families to spend quality time together.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Service
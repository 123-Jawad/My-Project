import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
     Aos.init();
    }, [])
  
  return (
    <div>
          {/* About section */}
      <div className="container-fluid" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="aboutstar">
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
                <i className="fa-sharp fa-solid fa-star" />
              </div>
              <p id="about-heading" data-aos="fade-in">
                Marina Hotels
              </p>
              <h2 data-aos="fade-in">
                Enjoy a Luxury Experience
              </h2>
              <p data-aos="fade-up">
                Surround yourself with serenity in the heart of the bustling city as we welcome you to Marina Hotel Lahore. Experience the comforts of home by staying in our modern rooms and suites. Enjoy delicious food at our signature restaurants serving both international and local cuisines. Relax in the fitness centre, spa or swimming pool. With our round-the-clock services, we ensure making your stay pleasant and comfortable, each time you vist :
              </p>
              <div className="telephoneicon">
                <div className="telephonelogo">
                  <i className="bi bi-telephone-outbound" />
                </div>
                <div className="heading">
                  <p>
                    Reservation
                  </p>
                  <h4>
                    <a href>855 100 4444</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6" id="about-img">
              <img src="images/8.jpg" alt="" className="img-fluid img-responsive" id="about1" data-aos="flip-right" />
              <img src="images/2.jpg" alt="" className="img-fluid img-responsive" id="about2" data-aos="flip-right" />
            </div>
          </div>
        </div>
    </div>
             
    </div>
  )
}

export default About
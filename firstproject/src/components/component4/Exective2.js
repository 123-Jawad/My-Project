import React from 'react'
import { Link } from 'react-router-dom'

function Exective2() {
  return (
    <div>
                         <div className="container-fluid" id="standardroom-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="standardstar">
                  <i className="fa-sharp fa-solid fa-star" />
                  <i className="fa-sharp fa-solid fa-star" />
                  <i className="fa-sharp fa-solid fa-star" />
                  <i className="fa-sharp fa-solid fa-star" />
                  <i className="fa-sharp fa-solid fa-star" />
                </div>
                <p id="standard-heading">
                  Marina Hotels
                </p>
                <h2>
                  Exceutive Room
                </h2>
                <p>
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
                <h4>Pets</h4>
                <p id='pet'>
                  Pets not allowed
                </p>
                <h4>Children and extra beds</h4>
                <p>Children are welcome Kids stay free! Children stay free when using existing bedding; children may not be eligible for complimentary breakfast Rollaway/extra beds are available for $ 10 per day.</p>
                <div className="Standard-btn">
                  <button> <Link to="/reservation"> Book Now</Link></button>
                </div>
                <h4>You can also book!</h4>
              </div>
              <div className="col-lg-4" id="amenties">
                <div className="amenties-cont">
                  <h2>
                    Amenities
                  </h2>
                  <p>
                    <i className="fa-solid fa-person" /><i className="fa-solid fa-person" /> 1-2 Persons
                  </p>
                  <p>
                    <i className="fa-solid fa-wifi" /> Free Wifi
                  </p>
                  <p>
                    <i className="fa-solid fa-mug-saucer" /> Breakfast
                  </p>
                  <p>
                    <i className="fa-solid fa-water-ladder" /> Swimming Pool
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Exective2
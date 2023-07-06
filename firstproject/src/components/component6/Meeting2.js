import React from 'react'
import { Link } from 'react-router-dom'

function Meeting2() {
  return (
    <div>
                {/* metting enqire ---------------------------------*/}
                <div className="meeting-info">
          <div className="meeting-info-cont">
            <h2>
              Signature Venues
            </h2>
            <p>
              Marina Hotel Lahore defines high standards of hospitality, offering meeting venues with warm and resourceful service. With a wide variety of well-equipped Conference Halls and Meeting Rooms, we provide personalised services for all your events.
            </p>
            <div className="button-s">
              <button id="stand-btn"><Link to="/reservation">Enquire</Link></button>
            </div>
          </div>
        </div>
        {/* meeting fact --------------------------------------------------------------------------*/}
        <div className="fact">
          <div className="fact-info">
            <h2>Fact</h2>
            <p>Our conference rooms and banquet halls serve as ideal venues for launches, receptions and annual events with a large number of business and presentation facilities.</p>
          </div>
          <div className="fact-measure">
            <p><b>9</b> Conference Rooms</p>
            <p><b>10</b> Convention Facilities</p>
            <p><b>6</b> Banquet Halls</p>
            <p><b>37,101 sq ft</b> Largest Hall</p>
          </div>
        </div>
    </div>
  )
}

export default Meeting2
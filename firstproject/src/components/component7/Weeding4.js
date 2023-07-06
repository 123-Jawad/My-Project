import React from 'react'

function Weeding4() {
  return (
    <div>
              {/* Container------------------------------------------------------*/}
      <div className="container" id="row-card">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="images/deluxe.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Deluxe</h5>
                <a href="#" className="btn">Book</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="images/executive.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Executive</h5>
                <a href="#" className="btn">Book</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="images/luxury.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Luxury</h5>
                <a href="#" className="btn">Book</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weeding4
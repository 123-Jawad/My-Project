import React, { useState } from 'react'


function Form(props) {
 const [handle, setHandle] = useState();
const handler = (event) => {
    const { name, value } = event.target;
    setHandle({ ...handle, [name]: value });
    
  };
 
  const createApi = async () => {
    
	
    await fetch("http://localhost:4000/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(handle),

   
    }); 
    
 console.log("hello");
  };
  return (
    <div>

        {/* Hotel reservation form */}
       
        
        
<div id="h-m">
        <div id="form-res">
          <div id="reservation-hd">
            <h1>Marina Hotel</h1>
          </div>
          <form
           onSubmit={(e) => {
           e.preventDefault();
          createApi();
        }}
          >
            <div id="Partition">
              <fieldset>
                <h2>Personal Details</h2>
                <label htmlFor="check-in">Name</label><i className="fa-solid fa-user" />
                <input type="text" placeholder="Enter Full name" id="hf-1" required 
                 onChange={handler}
                  name="Name"

                />
                <label htmlFor="check-in">Adress</label><i className="fa-solid fa-house" />
                <input type="text" placeholder="Enter Your Adress" id="hf-1" required
                onChange={handler}
                  name="Address" />
                <label htmlFor="check-in">E-mail</label><i className="fa-solid fa-envelope" />
                <input type="email" placeholder="Enter Your Email" id="hf-1" required 
                  onChange={handler}
                  name="Email"
                />
                <label htmlFor="check-in">Phone no</label><i className="fa-solid fa-phone" />
                <input type="tel" placeholder="Enter Your phone no" id="hf-1" required 
                  onChange={handler}
                  name="Phone"
                />
              </fieldset>
            </div>
            <div id="Partition-2">
              <fieldset>
                <h2>Make a Reservation</h2>
                <label htmlFor="check-in">Check-in</label><i className="fa-solid fa-calendar-days" />
                <input type="date" id="hf-1" required  
                  onChange={handler}
                  name="Checkin"
                />
                <label htmlFor="check-in">Check-out</label><i className="fa-solid fa-calendar-days" />
                <input type="date" id="hf-1" required 
                    onChange={handler}
                  name="Checkout"
                />
                <select>
                  <option value={14} disabled selected>Room Type</option>
                  <option value={21}>Standard</option>
                  <option value={22}>Deluxe</option>
                  <option value={23}>Executive</option>
                  <option value={23}>Luxury</option>
                </select>
                <div id="hf-2">
                  <i className="fa-solid fa-user-check" /><i className="fa-solid fa-user-check" />
                  <input type="tel" placeholder="How many room are required?" id="hf-1" required 
                      onChange={handler}
                  name="Howmanyroom"
                  />
                </div>
              </fieldset>
            </div>
            <a href><button type="submit">Book</button></a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
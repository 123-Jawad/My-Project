import React, { useState } from "react";

const [handle, setHandle] = useState(empty);
const handler = (event) => {
    const { name, value } = event.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };
  //for creating the Api
  const createApi = async () => {
    // const myFormData = new FormData();

		// myFormData.append("name", handle.name);
		// myFormData.append("fatherName", handle.fatherName);
		// myFormData.append("email", handle.email);
		// myFormData.append("image", handle.image);
    await fetch("http://localhost:4000/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(handle),
      body:myFormData,
    }); 
    
    fetchApi();
 
  };
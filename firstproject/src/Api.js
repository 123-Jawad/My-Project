import React, { useEffect, useState } from 'react'

function Api() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/carts").then((response) => response.json()
            .then((data) => { setdata(data) 
            }).catch(()=>{
                console.log("APi failed to fetch");
            })
        );

    });

    return (
        <div className='container'>
            <table className='table table-bordered'>
                <tr>
                    <th>ID</th>
                    <th>user Id</th>
                    <th>Date</th>
                    <th>Products Id</th>

                </tr>
                {
                data.map((blue)=>(
                    <tr>
                        <td>{blue.id}</td>
                        <td>{blue.userId}</td>
                        <td>{blue.date}</td>
                        <td>{blue.products.productId}</td>


                    </tr>
                ))}
            </table>
        </div>)
}

export default Api
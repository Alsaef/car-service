/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const BookingRow = ({booking,setbooking,bookings}) => {
    const handeldelet=(_id)=>{
       console.log(_id)
       fetch(`http://localhost:3000/bookings/${_id}`,{
        method:"DELETE"
       })
       .then(res=> res.json())
       .then(data => {
        console.log(data)
        const remaning=bookings.filter(b=> b._id !== _id)
        setbooking(remaning)
       })
    }
    return (
        <>
       <tr>
        <th>
          <label>
          <button onClick={()=>handeldelet(booking._id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={booking.img} />
              </div>
            </div>
            <div>
              <div className="font-bold">{booking.name}</div>
            </div>
          </div>
        </td>
        <td>
        {booking.email}
          <br/>
          <span className="badge badge-ghost badge-sm"></span>
        </td>
        <td>{booking.order}</td>
        <td>{booking.price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        </>
    );
};

export default BookingRow;
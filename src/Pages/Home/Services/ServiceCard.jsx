/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={service.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{service.title}</h2>
    <p className=" text-[#FF3811] font-semibold">Price: {service.price}</p>
    <div className="card-actions">
     <Link to={`/chackout/${service._id}`}><button  className="btn btn-primary">Book Now</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;
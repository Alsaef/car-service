// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Seriices = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className=' mt-14'>
            <h5 className=' font-bold text-[#FF3811] text-xl text-center'>Service</h5>
            <h2 className=' mb-3 text-4xl text-center font-bold'>Our Service Area</h2>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    services.map(service => console.log(service))
                }
                {
                    services.map(service => 
                    <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Seriices;